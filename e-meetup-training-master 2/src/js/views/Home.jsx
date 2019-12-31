import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import HomeSlide from '../component/HomeSlide.jsx';
import Banner from '../component/Banner.jsx';
//import BannerProduct from '../component/BannerProduct.jsx';
import Footer from '../component/Footer.jsx';
import Login from '../component/Login.jsx';
import TrainingVideo from '../component/TrainingVideo.jsx';
import FlipGallery from '../component/FlipGallery.jsx';
import ErrorBoundary from "../component/ErrorBoundary.jsx";

export default class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <ErrorBoundary>
                    <NavBar />
                    <HomeSlide />
                    <Banner />
                    <Footer />
                </ErrorBoundary>    
                
            </React.Fragment>
        );
    }
}
               
               




                
