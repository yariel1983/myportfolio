import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../stores/AppContext.jsx";

class ViewProduct extends React.Component {
    constructor() {
        super();
        }
    
    render () {
        return (
            <div className="container  mt-5" id="aboutfeature">
                <div className="row justify-content-center">
                    <Consumer>
                        {
                        ({ state }) => 
                                    (state.article.map((article, index) => {
    
                                    return (
                                        <div className="card bordercol-lg-4 col-md-6 col-sm-12 ml-5 mt-5 mb-5"  key={index}>
                                            <style>{'.card{max-width: 18rem;}'}</style>
                                            <Link to={"/DetailsProduct/"+article.id}>
                                                <img className="card-article" src={article.img_src} alt="Card image cap"/>
                                                <div className="card-article-overlay">
                                                </div>
                                            </Link>
                                            <div className="card-footer bg-transparent">{article.name}
                                                <p className="card-text"><small className="text-muted">Last updated 2 mins ago</small></p>
                                            </div>
                                        </div>
                                    );}))}
                    </Consumer>
                </div>
            </div>);
        }
    }

export default ViewProduct;