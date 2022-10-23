import React, {Component} from "react";
import '../../LoginPage/LoginP.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
            {/*Inputs texts*/}
            <input className="loginPageText" type="text" placeholder="Phone number, username, or email"></input>
            <input className="loginPageText" type="password" placeholder="Password"></input>
            {/*Inputs Button*/}
            <button className="loginButton" >Log In</button>
        </div> );
    }
}
 
export default SignIn ;