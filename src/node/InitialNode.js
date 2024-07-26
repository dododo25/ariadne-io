import Node from './Node';

const InitialNode = props => {
  const radius = 32;
  const borderWidth = 2;

  const view = (
    <g>
      <circle cx={radius} cy={radius} r={radius} fill='#212121' />
      <circle cx={radius} cy={radius} r={radius - borderWidth * 2} fill='#FAFAFA' />
    </g>
  );

  return <Node x={props.x} y={props.y} view={view} />
};

export default InitialNode;