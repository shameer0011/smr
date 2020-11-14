import React from "react";
import { useState } from "react";
export const Counter = () => {
  const [counter, setcounter] = useState(0);
  const increment = (incValue) => {
    // setcounter((prevCounter) => prevCounter + 1);
    setcounter((prevCounter) => prevCounter + incValue);
  };
  const decrement = (decValue) => {
    if (counter <= 0) return;
    // setcounter((prevCounter) => prevCounter - 1);
    setcounter((prevCounter) => prevCounter - decValue);
  };

  return (
    <div>
      <button onClick={() => increment(5)}>+</button>
      <button onClick={() => decrement(4)}>-</button>
      {counter}
    </div>
  );
};
export default Counter;
