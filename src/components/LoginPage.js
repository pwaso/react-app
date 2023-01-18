import {Link} from "react-router-dom"
import React from "react";
import classes from "./LoginPage.module.css"

function LoginPage(){
return(
        <form className={classes.loginForm}>
            <div className={classes.cover}>
                <h1>LOGIN</h1>
                <input type="text" placeholder="username"></input>
                <input type="password" placeholder="password"></input>
                <div className={classes.loginButton}>
                <Link to="/welcome-customer-its-your-page">LOGIN</Link>
                </div>
                <p className={classes.text}>If new user Register here</p>
                <div className={classes.registerButton}>                    
                    <Link to="/customer-register-page">REGISTER</Link>
                </div>
            </div>
        </form>
    
)
}

export default LoginPage;
