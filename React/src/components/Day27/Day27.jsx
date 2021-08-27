import React from "react";
import { Provider } from "react-redux";
import Day27Todo from "./Day27Todo";
import ListTodo from "./ListTodo";
import store from "./store";
const Day27=()=>
{
    return(
        <>
        <Provider store={store}>
         <Day27Todo/>
         <ListTodo/>
        </Provider>
        </>
    );
}
export default Day27;