import { useDispatch } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../../../Redux/Action/CounterAction";
const Buttons = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incrementCounter())}>+</button>
      <button onClick={() => dispatch(decrementCounter())}>-</button>
    </div>
  );
};

export default Buttons;
