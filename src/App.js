import React, { createRef } from 'react';

import Edge from './node/Edge';
import ExpressionNode from './node/ExpressionNode';
import HaltingNode from './node/HaltingNode';
import InitialNode from './node/InitialNode';
import SwitchNode from './node/SwitchNode';
import MenuNode from './node/MenuNode';

class App extends React.Component {

  constructor() {
    super();

    this.edgesRef = createRef();
  }

  render() {
    const r1 = createRef();
    const r2 = createRef();
    const r3 = createRef();
    const r4 = createRef();
    const r5 = createRef();
    const r6 = createRef();

    const n1 = <InitialNode ref={r1} />;
    const n2 = <ExpressionNode ref={r2} />;
    const n3 = <MenuNode ref={r3} />;
    const n4 = <SwitchNode ref={r4} />;
    const n5 = <HaltingNode ref={r5} />;
    const n6 = <HaltingNode ref={r6} />;

    return (
      <div className='overflow-hidden'>
        <svg width='100vw' height='100vh'>
          <g id='nodes'>
            {n1}
            {n2}
            {n3}
            {n4}
            {n5}
            {n6}
          </g>
          <g ref={this.edgesRef} id='edges'>
            <Edge from={r1} to={r2} />
            <Edge from={r2} to={r3} />
            <Edge from={r3} to={r4} />
            <Edge from={r4} to={r5} switchBranch='true' />
            <Edge from={r4} to={r6} switchBranch='false' />
          </g>
        </svg>
      </div>
    );
  }

  componentDidMount() {
    const element = this.edgesRef.current;
    const parent = element.parentNode;

    parent.removeChild(element);
    parent.insertBefore(element, parent.firstChild);
  }
}

export default App;
