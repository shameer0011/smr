import { useState } from "react";
import "./App.css";
import Counterfn from "./Components/CounterFn/Counterfn";
import Buttons from "./Components/ReduxCounter/Buttons/Buttons";

import "bootstrap/dist/css/bootstrap.css";
import Layout from "./Components/Templates/Navbar/layout";
import TodoHome from "./Components/TodoList/TodoHome";
import { Test1 } from "./Components/practice/Test1";
import { HideShow } from "./Components/practice/HideShow";
import Counter from "./Components/practice/Counter";
import CounterDisplay from "./Components/practice/CounterDisplay";
import ButtonRedux from "./Components/practice/ButtonRedux";
import Form, { FormValid } from "./Components/practice/Forms/FormValid";
import { FormsValid } from "./Components/practice/Forms/FormsValid";
import { Todo } from "./Components/TodoPractice/Todo";
import { Posts } from "./Components/Json/Posts";
// import { Switch } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

function App() {
  // const [toggle, setToggle] = useState(false);

  // const toggleHandler = () => {
  //   setToggle((prevToggle) => !prevToggle);
  // };
  let routes = (
    <Switch>
      <Route exact path="" component={Posts} />
    </Switch>
  );
  return (
    // <div className="App">
    //   <button onClick={toggleHandler}> {!toggle ? "show" : "hide"} </button>
    //   {toggle && <Counterfn />}
    // </div>
    // <div className="App">
    //    <Buttons />
    //     <Counter />
    // </div>
    // <div className="App">
    //   <Layout />
    // </div>
    // <div className="App">
    //   <TodoHome />
    // </div>
    // <div className="App">
    //   <CounterDisplay />
    //   <ButtonRedux />
    // </div>
    // <div className="App">
    //   <FormsValid />
    // </div>
    // <div className="App">
    //   <Todo />
    // </div>
    <div className="App">{routes}</div>
  );
}

export default App;
