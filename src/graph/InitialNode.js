import Node from './Node';

const radius = 32;
const borderWidth = 2;

class InitialNode extends Node {

  constructor(props) {
    super(props);

    this.state.width = radius * 2;
    this.state.height = radius * 2;

    this.view = (
      <g>
        <circle cx={radius} cy={radius} r={radius} fill='#212121' />
        <circle cx={radius} cy={radius} r={radius - borderWidth * 2} fill='#FAFAFA' />
      </g>
    );

    this.junctionPoints = [
      {x: radius, y: radius * 2 - borderWidth, type: 'exit'}
    ];
  }
}

export default InitialNode;