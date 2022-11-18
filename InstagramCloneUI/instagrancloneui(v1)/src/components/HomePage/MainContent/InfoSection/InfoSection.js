import React, {Component} from 'react';
import "./InfoSection.css"
import { Avatar } from '@mui/material';
import imageSrc from "../../../../images/pp1.png";
class InfoSection extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div className="infoContainer">
            <Avatar src={imageSrc} className="infoImage"/>
            <div className="infoContentContainer">
                <div className = "infoUserName">
                    Vinh Tran
                </div>
                <div className = "infoUserDescription">
                    Deqweq
                </div>
            </div>
        </div> );
    }
}
 
export default InfoSection;