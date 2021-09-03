import React from "react";
import ProductListing from "./components/screens/ProductListing";
import ProductDetails from "./components/screens/ProductDetails";
import NavBar from "./components/layout/NavBar";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Day30.css";
const Day30 = () => {
  return (
    <Router>
      <Provider store={store}>
        <div className="day30">
          <NavBar />
          <Switch>
            <Route exact path="/day-30/:id" component={ProductDetails} />
            <Route exact path="/day-30" component={ProductListing} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
};

export default Day30;