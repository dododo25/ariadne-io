import Node from './Node';

const strokeWidth = 4;

class ExpressionNode extends Node {

  constructor(props) {
    super(props);

    this.state.width = 160;
    this.state.height = 80;
  }

  render() {
    return (
      <g ref={this.ref} transform={`translate(${this.state.x}, ${this.state.y})`}>
        <path d='M 16 0 L 144 0 A 16 16 0 0 1 160 16 L 160 64 A 16 16 0 0 1 144 80 L 16 80 A 16 16 0 0 1 0 64 L 0 16 A 16 16 0 0 1 16 0 z' fill='#FAFAFA' stroke='#212121' strokeWidth={strokeWidth} strokeLinejoin='round' />
      </g>
    );
  }
}

export default ExpressionNode;