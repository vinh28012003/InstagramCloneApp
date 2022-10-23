import React, {Component} from "react";
import "../../components/HomePage/HomePage.css";
import NavBar from './NavBar/NavBar.js';

import MainCont from "./MainContent/MainCont.js";
class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
            <NavBar/>
            <MainCont/>
        </div>
        );
    }
}
 
export default HomePage;