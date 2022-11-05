import React, {Component} from 'react';
import './MainCont.css';
import Grid from '@mui/material/Grid';

import StatusBar from './StatusBar/StatusBar';
import PostPanel from './PostViews/PostPanel';
class MainCont extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
            <Grid container>
                <Grid item xs ={2}>asdasd</Grid>
                <Grid item xs ={6}>
                    <div>
                        <StatusBar></StatusBar>
                        <PostPanel></PostPanel>
                    </div>
                </Grid>
                <Grid item xs ={2}>asda</Grid>
                <Grid item xs ={2}>asdad</Grid>
            </Grid>
        </div> );
    }
}
 
export default MainCont;