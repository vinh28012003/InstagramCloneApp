import React, {Component} from 'react';
import './MainCont.css';
import Grid from '@mui/material/Grid';
import StatusBar from './StatusBar/StatusBar';
import PostPanel from './PostViews/PostPanel';
import Suggestions from './Suggestion/Suggestion';
import InfoSection from './InfoSection/InfoSection';
import plusSign from '../../../images/plus.png'
import {app} from "../../Firebase/firebase.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class MainCont extends Component {
    constructor(props) {
        super(props);
        this.state= {
            postArray:[],
            upLoadImgPB:"",
            
        }
    }
    componentDidMount() {
        this.getPost();
    }
    getPost=()=> { //Calling backend for data from here
        
        const thisContext = this;
        fetch("http://localhost:8080/post").then(response => response.json())
        .then(data =>{
            thisContext.setState({postArray: data});
        }).catch(error => {
            console.log(error);
        });
        
    }

    upload = (event) => {
        const metadata = {
            contentType: 'image/png'
        };
        let image = event.target.files[0];
        if (image===null || image == undefined) {
            return;
        }
        const storage = getStorage(app);
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + image.name);
        const uploadTask = uploadBytesResumable(storageRef, image, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            this.setState({upLoadImgPB: progress+'%'});
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            }
        }, 
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
            case 'storage/canceled':
                // User canceled the upload
                break;
            case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
        }, 
        () => {
            // Upload completed successfully, now we can get the download URL
            this.setState({upLoadImgPB:""});
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                //console.log('File available at', downloadURL);
                var postid = Math.floor(Math.random()*100000);
                console.log(postid.toString());
                const currentDate = new Date();
                const timestamp = currentDate.getTime();
                let payload= {

                    "postId": postid.toString(),
                    "userId": localStorage.getItem("userID").toString(),
                    "postPath":downloadURL,
                    "timestamp": timestamp,
                    "likeCount" : 0, 
                        
                }
                console.log(payload);
                const requestOptions = {
                    method: "POST",
                    headers: {'Content-Type' : "application/json"},
                    body : JSON.stringify(payload)
                }
                
                fetch("http://localhost:8080/post", requestOptions).then(response => response.json())
                .then(data =>{
                    console.log(data);
                }).catch(error => {
                    console.log(error);
                });
                window.location.reload();
            });
            
        }
        );
        
    }

    render() { 
        return ( 
        <div className = "mainCont">
            <Grid container>
                <Grid item xs ={2}></Grid>
                <Grid item xs ={6}>
                    <div>
                        <StatusBar ></StatusBar>
                        <div className="imgUpLoadContainer">
                        <div className="addLine"/>
                        <div className="fileUploadDiv"> 
                            <label for ="fileUpload"><img className="mainPageUploadIcon" src={plusSign} ></img></label>
                            <input onChange ={this.upload} type="file" id="fileUpload"/>
                        </div>
                        <div className="addLine"/>
                        <div className="progressBar">{this.state.upLoadImgPB}</div>
                        </div>    
                        {
                            this.state.postArray.map((item, index)=>(
                                <PostPanel id={item.postId} userName={item.userName} postImage={item.postImageURL} likes= {item.likes}/>
                            ))
                        }
                        
                    </div>
                </Grid>
                
                <Grid item xs ={2}>
                    
                    <InfoSection></InfoSection>
                    <Suggestions></Suggestions>
                    </Grid>
                    
                <Grid item xs ={2}></Grid>
            </Grid>
        </div> );
    }
}
 
export default MainCont;