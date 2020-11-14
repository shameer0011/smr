import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from "../../Redux/Action/CounterAction";

const initialState = {
  CounterReducerStore: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, CounterReducerStore: state.CounterReducerStore + 1 };
    case DECREMENT_COUNTER:
      return { ...state, CounterReducerStore: state.CounterReducerStore - 1 };

    default:
      return state;
  }
};
