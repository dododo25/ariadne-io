import Node from './Node';

const strokeWidth = 4;

class SwitchNode extends Node {

  constructor(props) {
    super(props);

    this.state.width = 160;
    this.state.height = 160;

    this.view = (
      <g>
        <path d='M 80 0 L 160 80, 80 160, 0 80 z' fill='#FAFAFA' stroke='#212121' strokeWidth={strokeWidth} strokeLinejoin='round' />
      </g>
    );

    this.junctionPoints = [
      {x: this.state.width / 2, y: 0, type: 'entry'}, 
      {x: 0, y: this.state.height / 2, type: 'exit', branch: 'true'},
      {x: this.state.width, y: this.state.height / 2, type: 'exit', branch: 'false'},
    ];
  }
}

export default SwitchNode;