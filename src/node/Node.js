import React, { createRef } from 'react';

class Node extends React.Component {

  constructor(props) {
    super(props);

    this.ref = createRef();
    this.state = {x: props.x ?? 0, y: props.y ?? 0, xAnchor: 0, yAnchor: 0, triggered: false};

    this.onMoveListeners = new Set();
  }

  addOnMoveListener(listener) {
    this.onMoveListeners.add(listener);
  }

  componentDidMount() {
    const onMouseDown = async e => {
      const rect = e.target.getBoundingClientRect();
      this.setState({xAnchor: e.clientX - rect.x, yAnchor: e.clientY - rect.y, triggered: true});
    };

    this.ref.current.addEventListener('mousedown', onMouseDown);
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