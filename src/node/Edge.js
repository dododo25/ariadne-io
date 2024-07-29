import React from 'react';

class Edge extends React.Component {

  constructor(props) {
    super(props);

    this.state = {points: []};
  }

  render() {
    if (this.state.points.length < 2) {
      return <g></g>;
    }

    return (
      <g>
        <path d={`M ${this.state.points[0].x} ${this.state.points[0].y} L ${this.state.points.map(point => point.x + ' ' + point.y).join(', ')}`} stroke='#212121' strokeWidth='4' />
      </g>
    );
  }

  componentDidMount() {
    const from = this.props.from.current;
    const to = this.props.to.current;

    const fromRect = {
      x: from.state.x, 
      y: from.state.y, 
      width: from.state.width, 
      height: from.state.height};

    const toRect = {
      x: to.state.x, 
      y: to.state.y, 
      width: to.state.width, 
      height: to.state.height};

    from.addOnMoveListener((x, y) => {
      this.setState({points: [{x: x + fromRect.width / 2, y: y + fromRect.height / 2}, this.state.points[1]]});
    });

    to.addOnMoveListener((x, y) => {
      this.setState({points: [this.state.points[0], {x: x + toRect.width / 2, y: y + toRect.height / 2}]});
    });

    this.setState({points: [
      {x: fromRect.x + fromRect.width / 2, y: fromRect.y + fromRect.height / 2},
      {x: toRect.x + toRect.width / 2, y: toRect.y + toRect.height / 2},
    ]});
  }
}

export default Edge;