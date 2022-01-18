import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact>
          <Home />
        </Route>

        <Route path="/cart" component={Cart} exact>
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
