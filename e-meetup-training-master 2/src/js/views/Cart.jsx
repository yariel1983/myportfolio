import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import PageAbout from '../component/PageAbout.jsx';
import ProcessCheckout from '../component/ProcessCheckout.jsx';
import Footer from '../component/Footer.jsx';


export default class Cart extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                {/*<UserCart />*/}
                <ProcessCheckout />
               
                
            </React.Fragment>
        );
    }
}