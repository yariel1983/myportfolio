import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
//import FlipGallery from '../component/FlipGallery.jsx';
import UserContact from '../component/UserContact.jsx';
import Footer from '../component/Footer.jsx';


export default class Contact extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <UserContact />
                <Footer />
            </React.Fragment>
        );
    }
}
                
                
               
                
                