import React from 'react';

const findJunction = (comp, type, branch) => {
  for (let point of comp.junctionPoints) {
    if (point.type === type && ((branch && branch === 'none') || point.branch === branch)) {
      return point;
    }
  }

  return undefined;
}

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

    const fromJunction = findJunction(from, 'exit', this.props.switchBranch ?? 'none');
    const toJunction = findJunction(to, 'entry');

    from.addOnMoveListener((x, y) => {
      this.setState({points: [{x: x + fromJunction.x, y: y + fromJunction.y}, this.state.points[1]]});
    });

    to.addOnMoveListener((x, y) => {
      this.setState({points: [this.state.points[0], {x: x + toJunction.x, y: y + toJunction.y}]});
    });

    this.setState({points: [
      {x: fromJunction.x, y: fromJunction.y},
      {x: toJunction.x, y: toJunction.y},
    ]});
  }
}

export default Edge;