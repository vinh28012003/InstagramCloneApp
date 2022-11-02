import React, {Component} from 'react';
import "./NavBar.css"
import Grid from '@mui/material/Grid';
import insta_log from "../../../images/logoinsta.png";
import home from "../../../images/home.svg";
import message from "../../../images/message.svg";
import find from "../../../images/find.svg";
import react from "../../../images/love.svg";
import Avatar from '@mui/material/Avatar';
import profilePic from "../../../images/pp1.png"
class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
            <div className="MainPageNav">
                <Grid container>
                    <Grid items xs={1.5}>
                       
                    </Grid>
                    <Grid item xs={3}>
                        <img className = "navbarLogo" src = {insta_log} width="105px"/>
                    </Grid>
                    <Grid item xs = {3}>
                        <input className = "navSearchBar" text = "text" placeholder = "Search"/>
                    </Grid>
                    <Grid item xs={3} style={{"display":"flex"}}>
                        <img className="navBImage" src = {home} width="25px"/>
                        <img className="navBImage" src = {message} width="25px"/>
                        <img className="navBImage" src = {find} width="25px"/>
                        <img className="navBImage" src = {react} width="25px"/>
                        <Avatar className="navBImage" style = {{"maxWidth":"25px","maxHeight":"25px"}}src = {profilePic}></Avatar>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        </div> );
    }
}
 
export default NavBar;