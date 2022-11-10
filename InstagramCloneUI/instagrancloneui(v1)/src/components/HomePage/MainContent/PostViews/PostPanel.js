import React, {Component} from "react";
import "./PostPanel.css";
import { Avatar } from '@mui/material';
import postimage from '../../../../images/post.jpg';
class PostPanel extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div className = "postContainer">
            {/*Header*/}
            <div className="postHeader">
                <Avatar className = "postAva" src=""></Avatar>
                <div className="postUserName">Username</div>
            </div>
            {/*Image*/}
            <div>
                <img src ={postimage} margin-top="10px" width="466px" height="568px" ></img>
            </div>
            {/* Analytics */}
            <div></div>
            {/* Comment Section */}
            <div></div>
        </div> );
    }
}
 
export default PostPanel;