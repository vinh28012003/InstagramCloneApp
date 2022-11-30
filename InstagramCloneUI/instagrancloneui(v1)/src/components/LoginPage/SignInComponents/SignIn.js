import React, {Component} from "react";
import '../../LoginPage/LoginP.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import {storage, auth} from "../../Firebase/firebase.js";
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: null,
            password: null
        }
    }
    logIn= ()=>{
        signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
    render() { 
        return ( 
        <div>
            {/*Inputs texts*/}
            <input className="loginPageText" onChange={
                (event) => {this.state.emailId=event.currentTarget.value}
                } type="text" placeholder="Phone number, username, or email"></input>
            <input className="loginPageText" onChange={
                (event) => {this.state.password=event.currentTarget.value}
                } type="password" placeholder="Password"></input>
            {/*Inputs Button*/}
            <button className="loginButton" onClick = {this.logIn}>Log In</button>
        </div> );
    }
}
 
export default SignIn ;