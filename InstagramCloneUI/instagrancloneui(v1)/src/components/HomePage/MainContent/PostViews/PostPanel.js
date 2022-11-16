import React, {Component} from "react";
import "./PostPanel.css";
import { Avatar } from '@mui/material';
import postimage from '../../../../images/post.jpg';
import like from '../../../../images/love.svg';
import comment from '../../../../images/comment.svg';
import share from '../../../../images/share.svg';
class PostPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentList: []
        }
    }
    componentDidMount() {
        this.getComments();
    }

    getComments=()=>{ //Calling backend for data from here
        let data=[{
            "username":"ASD",
            "commentId":"1234",
            "timeStamp":"12345",
            "description":"Comment 1"
        },
        {
            "username":"A1231SD",
            "commentId":"12q34",
            "timeStamp":"12345e",
            "description":"Comment 2"
        },
        {
            "username":"123",
            "commentId":"3",
            "timeStamp":"2",
            "description":"Comment 3"
        }
    ];
        this.setState({commentList: data});
    }
    render() { 
        return ( 
        <div className = "postContainer">
            {/*Header*/}
            <div className="postHeader">
                <Avatar className = "postAva" src=""></Avatar>
                <div className="postUserName">{this.props.userName}</div>
            </div>
            {/*Image*/}
            <div>
                <img src ={this.props.postImage} style={{"marginLeft" : "-1px" ,"marginTop":"-1px"}}  width="470px" height="568px" ></img>
            </div>
            {/* Analytics */}
            <div className= "postFeatCont">
                <div >
                    <img src={like} className = "postReaction"></img>
                    <img src={comment} className = "postReaction"></img>
                    <img src={share} className = "postReaction"></img>
                </div>
                <div style={{"fontWeight" : "bold", "marginLeft" : "5px", "marginTop" : "0px","fontSize" : "15px"}} > {this.props.likes} likes</div>
            </div>
            {/* Comment Section */}
            <div style={{"marginTop" : "-5px", "textAlign":"left"}}>
                {
                    this.state.commentList.map((item, index)=>(
                        <div className="postComments">{item.username}: {item.description}</div>
                    )) 
                }
                <input text="text" className="postCommentBox" placeholder= "Add comment..."></input>
            </div>
        </div> );
    }
}
 
export default PostPanel;