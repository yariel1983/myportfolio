import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import DetailsArticle from '../component/DetailsArticle.jsx';
import Footer from '../component/Footer.jsx';
import PropTypes from 'prop-types';

export default class DetailsProduct extends React.Component{
    constructor(props) {
        super(props);
        }
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <DetailsArticle artId={this.props.match.params.artId}/>
                
                
            </React.Fragment>
        );
    }
}
DetailsProduct.propTypes = {
    match: PropTypes.object
    };