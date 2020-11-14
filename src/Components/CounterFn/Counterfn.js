import { useState } from "react";

const Counterfn = () => {
  const [counter, setCounter] = useState(0);

  const increment = (incValue) => {
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + incValue);
  };

  const decrement = (decValue) => {
    // setCounter(counter - 1);
    if (counter <= 0) return;
    setCounter((prevCounter) => prevCounter - decValue);
  };

  return (
    <div>
      <button onClick={() => increment(5)}> increment by 5</button>
      <button onClick={() => increment(2)}> increment by 2 </button>
      <button onClick={() => decrement(10)}> decrement by 10</button>
      <button onClick={() => decrement(3)}> decrement by 3</button>
      <h2> {counter} </h2>
    </div>
  );
};

export default Counterfn;
