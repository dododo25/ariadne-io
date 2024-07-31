import Node from './Node';

const strokeWidth = 4;

class MenuNode extends Node {

  constructor(props) {
    super(props);

    this.state.width = 240;
    this.state.height = 8;

    this.view = (
      <g>
        <rect x='0' y='0' width='240' height='12' fill='#FAFAFA' />
        <path d='M 0 2 L 240 2' stroke='#212121' strokeWidth={strokeWidth} />
        <path d='M 0 10 L 240 10' stroke='#212121' strokeWidth={strokeWidth} />
      </g>
    );

    this.junctionPoints = [
      {x: this.state.width / 2, y: 0, type: 'entry'}, 
      {x: this.state.width / 2, y: this.state.height, type: 'exit'},
    ];
  }
}

export default MenuNode;