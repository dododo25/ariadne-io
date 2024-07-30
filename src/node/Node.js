import React, { createRef } from 'react';

const junctionSize = 6;

class Node extends React.Component {

  constructor(props) {
    super(props);

    this.ref = createRef();
    this.state = {
      x: props.x ?? 0, 
      y: props.y ?? 0, 
      xAnchor: 0, 
      yAnchor: 0, 
      triggered: false, 
      lastClick: -1, 
      visibleJunctions: false
    };

    this.onMoveListeners = new Set();
  }

  addOnMoveListener(listener) {
    this.onMoveListeners.add(listener);
  }

  render() {
    const junctions = this.junctionPoints.map((i, index) => {
      return <path key={index} d={`m ${i.x} ${i.y} l ${-junctionSize} ${-junctionSize},  ${junctionSize * 2} ${junctionSize * 2}, ${-junctionSize} ${-junctionSize}, ${-junctionSize} ${junctionSize}, ${junctionSize * 2} ${-junctionSize * 2}, ${-junctionSize} ${junctionSize}`} stroke='#C62828' strokeWidth='2' />
    });

    return (
      <g ref={this.ref} transform={`translate(${this.state.x}, ${this.state.y})`}>
        {this.view}
        <g className={this.state.visibleJunctions ? 'visible':  'invisible'}>
          {junctions}
        </g>
      </g>
    );
  }

  componentDidMount() {
    const onMouseDown = e => {
      const rect = e.target.getBoundingClientRect();
      this.setState({xAnchor: e.clientX - rect.x, yAnchor: e.clientY - rect.y, triggered: true});
    };

    const onClick = () => {
      const timestamp = Date.now();

      if (timestamp - this.state.lastClick < 300) {
        this.setState({visibleJunctions: !this.state.visibleJunctions});
      }

      this.setState({lastClick: timestamp});
    }

    this.ref.current.addEventListener('mousedown', onMouseDown);
    this.ref.current.firstChild.addEventListener('click', onClick);
  }

  componentDidUpdate() {
    const onMouseMove = e => {
      const newXPos = e.clientX - this.state.xAnchor;
      const newYPos = e.clientY - this.state.yAnchor;

      this.onMoveListeners.forEach(l => l(newXPos, newYPos));

      this.setState({x: newXPos, y: newYPos});
    };

    if (this.state.triggered) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', () => window.removeEventListener('mousemove', onMouseMove));

      this.setState({triggered: false});
    }
  }
}

export default Node;