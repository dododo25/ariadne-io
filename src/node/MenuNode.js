import Node from './Node';

const strokeWidth = 4;

class MenuNode extends Node {

  constructor(props) {
    super(props);

    this.state.width = 240;
    this.state.height = 8;
  }

  render() {
    return (
      <g ref={this.ref} transform={`translate(${this.state.x}, ${this.state.y})`}>
        <rect x='0' y='0' width='240' height='12' fill='#FAFAFA' />
        <path d='M 0 2 L 240 2' stroke='#212121' strokeWidth={strokeWidth} />
        <path d='M 0 10 L 240 10' stroke='#212121' strokeWidth={strokeWidth} />
      </g>
    );
  }
}

export default MenuNode;