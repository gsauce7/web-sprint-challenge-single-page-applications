import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/order/pizza/" component={PizzaForm} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
