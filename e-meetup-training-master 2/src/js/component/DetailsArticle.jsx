import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { browserhistory } from "react-router";
import PropTypes from 'prop-types';
import {Consumer} from "../stores/AppContext.jsx";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-regular/faStar';
import {withSession} from '../stores/AppContext.jsx';
import Appstore from '../component/Appstore.jsx';


class DetailsArticle extends React.Component {
    constructor(props) {
        super(props);
        
    this.state = {quantity: 1,
                  processCart: false};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setProcessCart = this.setProcessCart.bind(this);
    
    }
    
    handleChange(event) {
        this.setState({quantity: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    } 
    
    setProcessCart (p_bollean) {
        this.setState({processCart: p_bollean});
        }
    
    getSmailImage (array) {
        const smallimg = array.map((array, index) => (
            <div className="card border-light mt-0" key={index}>
                <img className="card-img" id="smallImg" src={array.src} alt="Card image" />
                <style>{'.card-img-overlay {position: unset}'}</style>
                <div className="card-img-overlay" >
                    <style>{'.card-img {max-width: 3rem;}'}</style>
                </div>
            </div>));
            return <div className="card-deck flex-row col-sm-12 ">
                <style>{'.card-deck .card {display: unset; flex: unset;}'}</style>
                {smallimg}
            </div>;         
        }
        
    render () {
        return (
            <div className="containerDetailsArticle mt-0 mb-5">
                <style>{'.containerDetailsArticle{margin-top: 100px; max-width: 960px; padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto;}'}</style>   
                <Consumer>
                    {
                        ({ state, actions }) => {   const product = state.article.find( product => product.id === parseInt(this.props.artId) );
                            if (!product) {
                                return <div>Erros, Contact to Administrator</div>;
                            } else {
                   
                            return (
                                <div className="row mt-0 mb-5">
                                    <div className="containerleftProduct col-sm-6 p-2">
                                        <div className="row mt-5 mb-5">
                                            <div className="imageCardProduct col-sm-12">
                                                <div className="icpLeft col">
                                                    <img className="card-img-top" src={product.img_src} />
                                                    <style>{'.card-img-top{max-width: 16rem}'}</style>
                                                </div>
                                                <div className="iGProduct col-sm-12">
                                                    {this.getSmailImage(product.gallery)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="containerRigthProduct col-sm-6 p-2">
                                        <div className="row mt-5 mb-5">
                                            <div className="col-sm-12">
                                                <h1 className="mb-4">{product.name}</h1>
                                            </div>
                                            <div className="col-sm-6 ">
                                                <div className="list-inline-item h4 font-weight-light mb-5">${product.sale_price}</div>
                                                <div className="list-inline-item text-muted font-weight-light"> 
                                                    <div>${product.regular_price}</div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                
                                                <div className="d-flex col-sm-12 align-items-center">
                                                    <div className="list-inline mr-2 mb-0">
                                                        <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                    </div>
                                                    <span className="text-muted text-sm mt-1">REVIEWS</span>
                                                </div>
                                                
                                            </div>
                                            <div className="col-sm-12">
                                                <span className="align-items-center m-5">
                                                    <p className="mb-4 text-muted">{product.description}</p>
                                                </span>
                                            </div>
                                            <form className="row" onSubmit={this.handleSubmit}>
                                                <div className="col-sm-6">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <label className="font-weight-bold mr-3">Items<span> (required)</span></label>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input type="number" min="1" max="100" value={this.state.quantity} onChange={this.handleChange} />
                                                        </div>
                                                    </div>
                                                </div>
                                                { this.state.processCart !== false ?
                                                    <div className="col-sm-6">
                                                        <div className="row">
                                                            <div className="col">
                                                                <Link to={"/cart"}>
                                                                    <button className="btn btn-secondary btn-sm">View Cart</button>
                                                                </Link>
                                                            </div>
                                                            <div className="col mt-3">
                                                                <Link to={"/products"}>
                                                                    <button className="btn btn-secondary btn-sm">Continue Shopping</button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                :
                                                    <div className="col-sm-6">
                                                        <button className="btn btn-secondary btn-sm" type="submit"  onClick={(e) => {e.preventDefault();
                                                                                                                            actions.addProductToCart(product.id,this.state.quantity);
                                                                                                                            this.setProcessCart(true);}}>Add to Cart</button>
                                                    </div>
                                                
                                                }
                                                
                                            </form>
                                        </div>
                                    </div>   
                                </div>);
                            }
                        }
                    }
                </Consumer>
                <Appstore />
            </div>);
    }
}
 
export default DetailsArticle;

DetailsArticle.propTypes = {
    artId: PropTypes.string
    };

                                                    
