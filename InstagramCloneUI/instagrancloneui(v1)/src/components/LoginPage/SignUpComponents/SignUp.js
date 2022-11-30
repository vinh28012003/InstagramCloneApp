import React, {Component} from "react";
import "../../LoginPage/LoginP.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {storage, auth} from "../../Firebase/firebase.js";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId : null,
            name: null,
            userName: null,
            password: null
        }
    }

    newSignUp=() => {
        
        createUserWithEmailAndPassword(auth, this.state.emailId, this.state.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // Save to database using post request
            let payload= {

                "userId": user.uid,
                "userName": this.state.userName,
                "name": this.state.name,
                "profileImage" : ""    
                    
            }
            const requestOptions = {
                method: "POST",
                headers: {'Content-Type' : "application/json"},
                body : JSON.stringify(payload)
            }
            
            fetch("http://localhost:8080/users", requestOptions).then(response => response.json())
            .then(data =>{
                localStorage.setItem("users", user);
                window.location.reload();
            }).catch(error => {

            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    
    
    render() { 
        return ( 
            <div>
                {/*Inputs texts*/}
                <input className="loginPageText" onChange={
                    (event) => {this.state.emailId=event.currentTarget.value;}} type="text" placeholder="Phone number or email"></input>
                <input className="loginPageText" onChange={
                    (event) => {this.state.className=event.currentTarget.value;}} type="text" placeholder="Fullname"></input>
                <input className="loginPageText" onChange={
                    (event) => {this.state.userName=event.currentTarget.value;}} type="text" placeholder="Username"></input>
                <input className="loginPageText" onChange={
                    (event) => {this.state.password=event.currentTarget.value;}} type="password" placeholder="Password"></input>
                {/*Inputs Button*/}
                <button className="loginButton" 
                onClick={this.newSignUp} >Sign Up</button>
            </div>
         );
    }
}
 
export default SignUp;
