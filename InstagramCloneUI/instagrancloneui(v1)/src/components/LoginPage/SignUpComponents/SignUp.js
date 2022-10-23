import React, {Component} from "react";
import "../../LoginPage/LoginP.css";

class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                {/*Inputs texts*/}
                <input className="loginPageText" type="text" placeholder="Phone number or email"></input>
                <input className="loginPageText" type="text" placeholder="Fullname"></input>
                <input className="loginPageText" type="text" placeholder="Username"></input>
                <input className="loginPageText" type="password" placeholder="Password"></input>
                {/*Inputs Button*/}
                <button className="loginButton" >Sign Up</button>
            </div>
         );
    }
}
 
export default SignUp;
