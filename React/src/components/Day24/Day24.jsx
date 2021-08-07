import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContex } from "./Day24Login";
import About from "./Day24About";
import Home from "./Day24Home";
import Profile from "./Day24Profile";
import Dashboard from "./Day24Dash";
import "./Day24.css";
function Day24() {
    return (
    <Router>
      <nav className="navbar_day24">
        <Link to="/" style={{color:'black'}}>Home</Link>
        <Link to="/about" style={{color:'black'}}>About</Link>
        <Link to="/profile" style={{color:'black'}}>Profile</Link>
        <Link to="/dashboard" style={{color:'black'}}>DashBaord</Link>
      </nav>

      <Switch>
        <AuthContex>
          <main>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </main>
        </AuthContex>
      </Switch>
    </Router>
  );
}

export default Day24;
