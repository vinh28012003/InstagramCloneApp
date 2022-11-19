import React,{Component} from "react";
import "./StatusBar.css";
import { Avatar } from '@mui/material';
import statusing from "../../../../images/pp1.png";
import addStory from '../../../../images/addStory.png';
class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusList: []
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData=()=>{ //Calling backend for data from here
        let data = [
            {
                "username" : "Vinh Quang Tran",
                "imageURL" :"../../../../images/pp1.png"
            },
            {
                "username" : "ASdldfhgalk Test",
                "imageURL" :"../../../../images/pp1.png"
            },
            {
                "username" : "ASdldfhgalk Test",
                "imageURL" :"../../../../images/pp1.png"
            },
            {
                "username" : "ASdldfhgalk Test",
                "imageURL" :"../../../../images/pp1.png"
            }
        ]
        this.setState({statusList: data});
    }
    
    render() { 
        return ( 
        <div>
            <div className="statContainer">
                
                <img src={addStory} className="addStory"></img>
                
                {
                    this.state.statusList.map((item, index)=>(
                        <div className="status">
                            <Avatar className="statusBarStat" src={statusing}></Avatar>
                            <div className="statusBarText">{item.username}</div>
                        </div>
                    ))
                }

            </div>
        </div> );
    }
}
 
export default StatusBar;