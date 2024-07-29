import Node from './Node';

const radius = 32;
const borderWidth = 2;

class InitialNode extends Node {

  constructor(props) {
    super(props);

    this.state.width = radius * 2;
    this.state.height = radius * 2;
  }

  render() {
    return (
      <g ref={this.ref} transform={`translate(${this.state.x}, ${this.state.y})`}>
        <circle cx={radius} cy={radius} r={radius} fill='#212121' />
        <circle cx={radius} cy={radius} r={radius - borderWidth * 2} fill='#FAFAFA' />
      </g>
    );
  }
}

export default InitialNode;