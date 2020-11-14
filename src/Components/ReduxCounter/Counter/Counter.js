import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter); // 1st counter is from index.js // 2nd counter is from reducer
  return <div>{counter}</div>;
};

export default Counter;
