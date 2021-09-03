import React from "react";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./Drawer";
const NavBar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <Link to="/day-30">
        <h2>React Redux Cart</h2>
      </Link>
      <button className="btn btn-outline-primary btn-cart" >
        <TemporaryDrawer />
      </button>
    </div>
  );
};
export default NavBar;