import React, { createRef } from 'react';

import Edge from './node/Edge';
import HaltingNode from './node/HaltingNode';
import InitialNode from './node/InitialNode';

class App extends React.Component {

  constructor() {
    super();

    this.edgesRef = createRef();
  }

  render() {
    const r1 = createRef();
    const r2 = createRef();
    const r3 = createRef();

    const n1 = <InitialNode ref={r1} />;
    const n2 = <InitialNode ref={r2} />;
    const n3 = <HaltingNode ref={r3} />;

    return (
      <div className='overflow-hidden'>
        <svg width='100vw' height='100vh'>
          <g id='nodes'>
            {n1}
            {n2}
            {n3}
          </g>
          <g ref={this.edgesRef} id='edges'>
            <Edge from={r1} to={r2} />
            <Edge from={r2} to={r3} />
          </g>
        </svg>
      </div>
    );
  }

  componentDidMount() {
    const parent = this.edgesRef.current.parentNode;

    parent.removeChild(this.edgesRef.current);
    parent.insertBefore(this.edgesRef.current, parent.firstChild);
  }
}

export default App;
