import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import ViewProduct from '../component/ViewProduct.jsx';
import Footer from '../component/Footer.jsx';

export default class Products extends React.Component{
    constructor(props) {
        super(props);
        
        }
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <ViewProduct />
                <Footer />
            </React.Fragment>
        );
    }
}
   