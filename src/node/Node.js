import { useState } from 'react';

const Node = props => {
  const [xPos, setXPos] = useState(props.x ?? 0);
  const [yPos, setYPos] = useState(props.y ?? 0);

  const [xAnchor, setXAnchor] = useState(0);
  const [yAnchor, setYAnchor] = useState(0);

  const [triggered, setTriggered] = useState(false);

  const onMouseMove = e => {
    console.log(xAnchor, yAnchor);

    setXPos(e.clientX - xAnchor);
    setYPos(e.clientY - yAnchor);
  };

  const onMouseDown = async e => {
    const rect = e.target.getBoundingClientRect();

    setXAnchor(e.clientX - rect.x);
    setYAnchor(e.clientY - rect.y);
    setTriggered(true);
  };

  if (triggered) {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', () => window.removeEventListener('mousemove', onMouseMove));

    setTriggered(false);
  }

  return (
    <g transform={`translate(${xPos}, ${yPos})`} onMouseDown={onMouseDown}>
      {props.view}
    </g>
  );
};

export default Node;