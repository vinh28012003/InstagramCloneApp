import { Avatar } from '@mui/material';
import React, {Component} from 'react';
import "./Suggestion.css";

import imgSrc from "../../../../images/pp1.png";
class Suggestions extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    //code to log out user
        

    render() { 
        return ( 
        <div>
            <div className ="sugContainer">
                <div style={{"display":"flex"}}>
                    <div className = "sugTextLine">
                        Suggestions For You
                    </div>
                    <div className = "signOut">Log out</div>
                </div>
                <div>
                    <div className = "suggestions">
                        <Avatar className="suggestionsAva" src={imgSrc}></Avatar>
                        <div className="sugFriendName"> friend_username_1</div>
                    </div>
                    <div className = "suggestions">
                        <Avatar className="suggestionsAva" src={imgSrc}></Avatar>
                        <div className="sugFriendName"> friend_username_2</div>
                    </div>
                    <div className = "suggestions">
                        <Avatar className="suggestionsAva" src={imgSrc}></Avatar>
                        <div className="sugFriendName"> friend_username_3</div>
                    </div>
                    <div className = "suggestions">
                        <Avatar className="suggestionsAva" src={imgSrc}></Avatar>
                        <div className="sugFriendName"> friend_username_4</div>
                    </div>
                    <div className = "suggestions">
                        <Avatar className="suggestionsAva" src={imgSrc}></Avatar>
                        <div className="sugFriendName"> friend_username_5</div>
                    </div>
                </div>
            </div>
            
        </div> );
    }
}
 
export default Suggestions;