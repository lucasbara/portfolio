import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Home />
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
