import React from 'react';
import "./Day26.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { updateEmailInput, updateUserNameInput , updatePasswordInput} from "./Day26Action";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Day26Login() {
    const userName = useSelector((state) => state.username)
    const email = useSelector((state) => state.email)
    const password = useSelector((state) => state.password)
    const dispatch = useDispatch();
    const classes = useStyles();

  

    return (
        <div>
           <div className="login_div26">
            <form className="login_form26">
            <h1 className="login_heading26">Login Here</h1>
               
                <input
                    type="text"
                    placeholder='User Name'
                    value={userName}
                    className="login_input26"
                    onChange={(e) => dispatch(updateUserNameInput(e.target.value))}/>

              
                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    className="login_input26"
                    onChange={(e) => dispatch(updateEmailInput(e.target.value))}/>

                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    className="login_input26"
                    onChange={(e) => dispatch(updatePasswordInput(e.target.value))}/>

                 <Button variant="contained" color="primary" 
                      style=
                      {{ marginTop: "30px",
                        height: "30px",
                        width: "320px",
                        backgroundColor:"blue",
                        boxShadow:"3px 5px 10px black",
                        marginLeft:"90px",
                        padding:"10px",
                       }}>
                    login
                   </Button>

                 
            </form>

            <br></br><br></br>
            <div>
              
                <p className="login26">Name : {userName}</p>
                <p className="login26">Email : {email}</p>
                <p className="login26">Password : {password}</p>
            </div>
            </div>
        </div>
    );
}

export default Day26Login;