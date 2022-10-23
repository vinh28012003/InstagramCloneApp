import React, { Component} from 'react';
import './LoginP.css';
import Grid from '@mui/material/Grid'; // Grid version 1

import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import SignIn from './SignInComponents/SignIn.js';
import SignUp from './SignUpComponents/SignUp.js';
class LoginP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin :true
        }
    }
    changeLogin=() => {
        if (this.state.isLogin) {
            this.setState({isLogin: false});

        } else {
            this.setState({isLogin: true});
        }
    }
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
                            
                            <div className="loginPageSignIn">
                                {
                                   this.state.isLogin ? <SignIn/> : <SignUp/>
                                }
                            
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
                        <div>
                            
                        </div>
                        <div >
                            {
                                this.state.isLogin ? 
                                <div className = "loginPageSignUpOptions"> 
                                    <div className="loginPageSignUpPrompt">
                                    Don't have an account?
                                    </div>
                                    <div className="loginPageSignUpText" onClick={this.changeLogin}>
                                    Sign up
                                </div> </div>: <div className = "loginPageSignUpOptions"> 
                                    <div className="loginPageSignUpPrompt">
                                     Already have an account?
                                    </div>
                                    <div className="loginPageSignUpText" onClick={this.changeLogin}>
                                    Log in
                                </div> </div>
                            }
                            
                        </div>
                        <div className="loginPageDownloadSection">
                            <div>
                                Get the app
                            </div>
                            <div className="loginPageOption">
                                <img className="loginPagedwimg" src={appstore} width="136px"/>
                                <img  className="loginPagedwimg" src={playstore} width="136px"/>
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