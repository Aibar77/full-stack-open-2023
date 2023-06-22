import { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);
  const addCount = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <p>{counter}</p>
      <div className="buttons">
        <button onClick={addCount}>Plus</button>
        <button onClick={() => setCounter(0)}>Zero</button>
        <button onClick={() => setCounter(counter - 1)}>Minus</button>
      </div>
    </div>
  );
};

export default State;
