import Node from './Node';

const strokeWidth = 4;

class ExpressionNode extends Node {

  constructor(props) {
    super(props);

    this.state.width = 160;
    this.state.height = 80;

    this.view = (
      <g>
        <path d='M 16 0 L 144 0 A 16 16 0 0 1 160 16 L 160 64 A 16 16 0 0 1 144 80 L 16 80 A 16 16 0 0 1 0 64 L 0 16 A 16 16 0 0 1 16 0 z' fill='#FAFAFA' stroke='#212121' strokeWidth={strokeWidth} strokeLinejoin='round' />
      </g>
    );

    this.junctionPoints = [
      {x: this.state.width / 2, y: 0, type: 'entry'}, 
      {x: this.state.width / 2, y: this.state.height, type: 'exit'},
    ];
  }
}

export default ExpressionNode;