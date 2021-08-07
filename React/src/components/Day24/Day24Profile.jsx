import React, {useContext} from 'react';
import LoginContext from "./Day24Login";
import {Route, Redirect} from "react-router-dom";

function Profile() {
    const handleLog = useContext(LoginContext)
    return (
        <div>
            <Route>
            {
                handleLog.loggedIn ?
                    <h2 style={{textAlign: 'center',fontSize:'30px'}}>Profile</h2>:
                <Redirect to='/'/>
            }
            </Route>
            </div>
            );
}

export default Profile;