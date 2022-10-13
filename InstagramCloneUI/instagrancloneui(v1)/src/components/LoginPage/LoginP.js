import React, { Component} from 'react';
import './LoginP.css';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png';

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
                                    <div className="loginPageSignIn">
                                        <input 
                                        className="loginPageText" 
                                        type="text"
                                        placeholder="Phone number, username, or email"
                                        ></input>
                                        <input 
                                        className="loginPageText" 
                                        type="password"
                                        placeholder="Password"></input>
                                        <button className="loginButton" >Log In</button>
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