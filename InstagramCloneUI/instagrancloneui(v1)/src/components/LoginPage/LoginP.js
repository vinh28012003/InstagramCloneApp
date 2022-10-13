import React, { Component} from 'react';
import './LoginP.css';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png'
class LoginP extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Grid container>
                <Grid item xs={3}>
                    
                </Grid>
                <Grid item xs={6}>
                    <div className="loginpage_main">
                    <div>
                        <img src={inst_image} width="454px"/>
                    </div>
                    <div>
                        <div className="loginpage_rightcomponent">
                            <img  className="loginpageLogo"  src={insta_logo}></img> 
                            {/*Inputs texts*/}
                            <div className="loginPageSignIn">
                                <input 
                                className="loginPageText" 
                                type="text"
                                placeholder="Phone number, username, or email"></input>
                                <input 
                                className="loginPageText" 
                                type="password"
                                placeholder="Password"></input>
                                {/*Inputs Button*/}
                                <button className="loginButton" >Log In</button>
                            </div>
                            <div className="loginOrDiv">
                                <div className="loginOrLeftStick">
                                </div>
                                <div className="loginOrWord">
                                    OR
                                </div>
                                <div className="loginOrRightStick">
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="loginWithFacebook">
                                        <img src={fb} className="loginWithFacebookLogo"></img>
                                        {/*Inputs Login with facebook*/}
                                        <div className="loginWithFacebookText">
                                        Log in with Facebook</div>
                                    </div> 
                                </div>
                                {/*Inputs reset password*/}                                  
                                <div className="loginForgotPass">Forgot password?</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    
                </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default LoginP;