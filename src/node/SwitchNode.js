import Node from './Node';

const strokeWidth = 4;

class SwitchNode extends Node {

  constructor(props) {
    super(props);

    this.state.width = 160;
    this.state.height = 160;
  }

  render() {
    return (
      <g ref={this.ref} transform={`translate(${this.state.x}, ${this.state.y})`}>
        <path d='M 80 0 L 160 80, 80 160, 0 80 z' fill='#FAFAFA' stroke='#212121' strokeWidth={strokeWidth} strokeLinejoin='round' />
      </g>
    );
  }
}

export default SwitchNode;