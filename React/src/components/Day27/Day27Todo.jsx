import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { addItem27 } from "./Action";
import "./Day27.css";
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
const Todo27=()=>{
    const classes = useStyles();
    const [items,setItems]= useState("");
    const dispatch = useDispatch();
    return(
        <>
        <div className="div27">
        <input type="text" placeholder="Add Item" className="add27" value={items} 
         onChange={e => setItems(e.target.value)}/>
         <br/><br/>
         <Button variant="contained" color="primary" href="#contained-buttons" className="addbtn27" style={{marginLeft:"47%" , display:"inline-block"}}
         onClick={()=>{
           dispatch(addItem27({
             title : items,
             done : false,
            }));
            setItems("");
            }}>
            Add 
          </Button>
        </div>
        </>
    );
}
export default Todo27;