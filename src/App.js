import HaltingNode from './node/HaltingNode';
import InitialNode from './node/InitialNode';

const App = () => {
  return (
    <div>
      <svg width='400' height='400'>
        <InitialNode x={100} y={100} />
        <HaltingNode />
      </svg>
    </div>
  );
};

export default App;
