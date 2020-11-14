import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// import CounterReducer from "./Redux/Reducer/CounterReducer";
import TodoReducer from "./Redux/Reducer/TodoReducer";
import CounterReducer from "./Components/practice/Redux/Reducer/CounterReducer";
import forms from "./Components/practice/Redux/Reducer/FormReducer";
import ReducerTodo from "./Redux/Reducer/ReducerTodo";
import { BrowserRouter as Router } from "react-router-dom";

const rootReducer = combineReducers({
  counter: CounterReducer, //this is the name of 'CounterReducer.js'..
  lists: TodoReducer,
  countstore: CounterReducer,
  form_store: forms,
  todo_Store: ReducerTodo,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
