import React, {Component} from 'react';
import './MainCont.css';
import Grid from '@mui/material/Grid';

import StatusBar from './StatusBar/StatusBar';
import PostPanel from './PostViews/PostPanel';
class MainCont extends Component {
    constructor(props) {
        super(props);
        this.state= {
            postArray:[]
        }
    }
    componentDidMount() {
        this.getPost();
    }
    getPost=()=> { //Calling backend for data from here
        let data= [
            {
                "postId" : "1234",
                "userName": "anindya",
                "postImageURL" : "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp":"12345",
                "likes":"1234"
            }, 
            
        ];
        this.setState({postArray: data});
    }

    render() { 
        return ( 
        <div>
            <Grid container>
                <Grid item xs ={2}></Grid>
                <Grid item xs ={6}>
                    <div>
                        <StatusBar ></StatusBar>
                        {
                            this.state.postArray.map((item, index)=>(
                                <PostPanel id={item.postId} userName={item.userName} postImage={item.postImageURL} likes= {item.likes}/>
                            ))
                        }
                        
                        {/* //<PostPanel id="1234"  userName="asaff" postImage="" likes="100"/> */}
                        {/* <PostPanel></PostPanel>
                        <PostPanel></PostPanel> */}
                    </div>
                </Grid>
                <Grid item xs ={2}></Grid>
                <Grid item xs ={2}></Grid>
            </Grid>
        </div> );
    }
}
 
export default MainCont;