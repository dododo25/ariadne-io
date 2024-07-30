import Node from './Node';

const radius = 32;
const borderWidth = 2;

const x = radius * Math.sqrt(2) / 2;
const y = radius * Math.sqrt(2) / 2;

class HaltingNode extends Node {

  constructor(props) {
    super(props);

    this.state.width = radius * 2;
    this.state.height = radius * 2;

    this.view = (
      <g>
        <circle cx={radius} cy={radius} r={radius} fill='#212121' />
        <circle cx={radius} cy={radius} r={radius - borderWidth * 2} fill='#FAFAFA' />
        <path d={`M ${radius} ${radius} l ${-x} ${-y} l ${x * 2} ${y * 2}`} stroke='#212121' strokeWidth='4' />
        <path d={`M ${radius} ${radius} l ${x} ${-y} l ${-x * 2} ${y * 2}`} stroke='#212121' strokeWidth='4' />
      </g>
    );

    this.junctionPoints = [
      {x: radius, y: borderWidth, type: 'entry'}
    ];
  }
}

export default HaltingNode;