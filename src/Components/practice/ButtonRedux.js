import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
} from "../practice/Redux/Action/CounterAction";
export const ButtonRedux = () => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementCounter());
  };
  const decrement = () => {
    dispatch(decrementCounter());
  };
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
export default ButtonRedux;
