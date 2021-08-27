import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {useSelector , useDispatch} from "react-redux";
import { delItem27 , deleteALL27 } from "./Action";
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const ListTodo=()=>{
    const classes = useStyles();
    const todos = useSelector((state)=>state.todo);
    const dispatch = useDispatch();
    return(
    <>
    {todos.map((todo,index)=>(
    <div>
      <input type="checkbox" style={{height:"20px"}}/>
      <h5 className="todos27">{todo.title}</h5>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        className="addbtn27"
        style={{marginLeft:"30px" , marginBottom:"10px"}}
        onClick={()=>{
          dispatch(delItem27(index))
        }}
      >

      </Button>
      </div>
      ))}
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        className="addbtn27"
        style={{textAlign:"center"}}
        onClick={()=>{
          dispatch(deleteALL27())
        }}
      >
        Delete All
      </Button>
      </>
    );
}
export default ListTodo;