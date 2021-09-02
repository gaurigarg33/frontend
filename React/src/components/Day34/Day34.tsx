import React from "react";
import "./Day34.css";
import { Provider } from "react-redux";
import store from "./store34";
import NoteContainer from "./NoteContainer34";

const Day34 = () => {
  return (
    <Provider store={store}>
      <div className="day34">
        <NoteContainer />
      </div>
    </Provider>
  );
};

export default Day34;