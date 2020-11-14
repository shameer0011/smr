import React from "react";
import { useSelector } from "react-redux";
export const CounterDisplay = () => {
  const selectState = useSelector(
    (state) => state.countstore.CounterReducerStore
  );
  return <div>{selectState}</div>;
};

export default CounterDisplay;
