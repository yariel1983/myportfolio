import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import TrainingVideo from '../component/TrainingVideo.jsx';
//import BannerRegister from '../component/BannerRegister.jsx';
import Footer from '../component/Footer.jsx';
export default class Training extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <TrainingVideo />
                <Footer />
            </React.Fragment>
        );
    }
}
                
