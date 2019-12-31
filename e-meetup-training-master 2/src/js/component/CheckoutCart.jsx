import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../stores/AppContext.jsx";
import PropTypes from 'prop-types';
import {withSession} from '../stores/AppContext.jsx';


class CheckoutCart extends React.Component{
    constructor() {
        super();
        this.state = {
            discount: 25,
            totalItems: 0,
            totalPrice: 0
        };
    }
    
    render(){
        const { cart, article, actions } = this.props;
    

        if (cart.length <= 0) {
            const showpingCart = 
                <div className="ShoppingCard">
                    <style>{'.ShoppingCard{with: 300px; height:400px;}'}</style>
                    <div className="row">
                        <img className="card-img-top h-50" src="https://www.mwave.com/mwave/images/emptycarticon.png" alt="Card image cap"/>
                    </div>
                </div>;
            return (<div className="container">{showpingCart}</div>);
            } 
        else {
            const showpingCart = cart.map((item, index) => (
                <div className="ShoppingCard p-5" key={index}>
                    <div className="row">
                        <div className="d-md-flex flex-md-6">
                            <div className="containerleft ml-5">
                                <img className="card-img-top" src={actions.getInfoArticle(item.articleId).img_src} />
                                <style>{'.ShoppingCard .containerleft .card-img-top {max-width: 20rem;}'}</style>
                            </div>
                            <div className="containerRight mr-5">
                                <div className="col-md-12 order-md-2 mb-4">
                                    <ul className="list-group mb-3">
                                        <li key={item.articleid} className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div>
                                                <h6 className="my-0">{actions.getInfoArticle(item.articleId).name}</h6>
                                                <small className="text-muted">{item.desc}</small>
                                            </div>
                                            <span className="text-muted">${actions.getInfoArticle(item.articleId).price}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between bg-light">
                                            <div className="text-success">
                                                <h6 className="my-0">Promo code</h6>
                                                <small>{this.state.discount}% Discount</small>
                                            </div>
                                            <span className="text-success">-${(this.state.discount/100 * this.state.totalPrice).toFixed(2)}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span className="text-muted">{item.quantity} Quantity</span>
                                        </li>        
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Total (USD)</span>
                                            <strong>${(this.state.totalPrice - this.state.discount/100 * (this.state.quantity * this.state.totalPrice)).toFixed(2)}</strong>
                                        </li>
                                    </ul>
                                    <div className="form-group text-center pb-4">
                                        <div className="col-lg-12 text-center mb-2"><strong>Credit Card Info:</strong></div>
                                        <div className="form-control input-lg mb-3 pb-4">
                                            <div className="col-lg-12"><strong>Card Type:</strong><img src="https://static.shoplightspeed.com/shops/606600/files/001462255/cards.jpg" width="230 px" height="60 px"/></div>
                                            <div className="col-lg-12">
                                                <select id="CreditCardType" name="CreditCardType" className="form-control">
                                                    <option value="5">Visa</option>
                                                    <option value="6">MasterCard</option>
                                                    <option value="7">American Express</option>
                                                    <option value="8">Discover</option>
                                                    <option value="9">PayPal</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group form-control input-lg pb-4">
                                            <div className="col-lg-12"><strong>Credit Card Number:</strong></div>
                                            <div className="col-lg-12"><input type="text" className="form-control" name="car_number" value="" /></div>
                                        </div>
                                        <div className="form-group form-control input-lg mb-3 pb-4">
                                            <div className="col-lg-12"><strong>Card CVV:</strong></div>
                                            <div className="col-lg-12"><input type="text" className="form-control" name="car_code" value="" /></div>
                                        </div>
                                        <div className="form-group form-control input-lg pb-4">
                                            <div className="col-lg-12 mb-3">
                                                <strong>Expiration Date</strong>
                                            </div>
                                            <div className="col-lg-12">
                                                <select className="form-control" name="">
                                                    <option value="">Month</option>
                                                    <option value="01">01</option>
                                                    <option value="02">02</option>
                                                    <option value="03">03</option>
                                                    <option value="04">04</option>
                                                    <option value="05">05</option>
                                                    <option value="06">06</option>
                                                    <option value="07">07</option>
                                                    <option value="08">08</option>
                                                    <option value="09">09</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                            </div>&nbsp;
                                            <div className="col-lg-12">
                                                <select className="form-control" name="">
                                                    <option value="">Year</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2021">2021</option>
                                                    <option value="2022">2022</option>
                                                    <option value="2023">2023</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2025">2025</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Promo code"></input>&nbsp;
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-danger" onClick={() => actions.delProductToCart(index, item.articleId, item.quantity )}>Delete item</button>&nbsp;
                                            <Link className="nav-item nav-link m-0 p-0" to={"/ProccessCheckCart"}>
                                                    buy
                                            </Link>
                                            {/*<button className="btn btn-success text-white" href="#">Buy it Now</button>*/}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>));
                return <div className="container mt-5 mb-5">{showpingCart}</div>;
            }
        }
    }

export default withSession(CheckoutCart);

CheckoutCart.propTypes = {
    cart: PropTypes.array,
    actions: PropTypes.object,
    article: PropTypes.array
    };
                        
                        
                                    
                                    
                                    
