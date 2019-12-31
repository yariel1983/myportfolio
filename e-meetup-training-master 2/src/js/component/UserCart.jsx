import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function UserCart(props){
    return (
        <div>
            <div className="jumbotron jumbotron-sm  border border-dark">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12 col-lg-12">
                            <h1 className="h1">
                                <large>Shopping Cart</large></h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="shopping-cart text-center">
                <div className="product">
                    <div className="product-image">
                        <img src="https://media.lifespanfitness.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/r/tr2000e-electric-folding-treadmill-female-running.jpg"/>
                    </div>
                    <div className="product-details"> 
                        <div className="product-title">Cardio Machine</div>
                        <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="product-price">Price: $ 500.00</div>
                    <div className="product-quantity mb-5">
                        <input type="number" value="1" min="1" id="prodquant"/>
                    </div>
                    <div className="product-removal">
                        <button className="remove-product mb-5 btn btn-outline-danger">
                        Remove
                        </button>
                    </div>
                </div>
            
                <div className="product">
                    <div className="product-image">
                        <img src="https://freepngimg.com/download/exercise_bike/1-2-exercise-bike-free-download-png.png"/>
                    </div>
                    <div className="product-details">
                        <div className="product-title">Exercise Bike</div>
                        <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className="product-price">Price: $ 500.00</div>
                    <div className="product-quantity mb-5">
                        <input type="number" value="1" min="1" id="prodquant"/>
                    </div>
                    <div className="product-removal mb-3">
                        <button className="remove-product btn btn-outline-danger">
                        Remove
                        </button>
                    </div>
                    
                </div>
            
                <div className="totals">
                    <div className="totals-item mt-3 mb-3">
                        <label>Subtotal</label>
                        <div className="totals-value" id="cart-subtotal">$ 1000.00</div>
                    </div>
                    <div className="totals-item mt-2 mb-2">
                        <label>Tax (7%)</label>
                        <div className="totals-value" id="cart-tax">70.00</div>
                    </div>
                    <div className="totals-item mt-2 mb-2">
                        <label>Shipping</label>
                        <div className="totals-value" id="cart-shipping">Free</div>
                    </div>
                    <div className="totals-item mt-2 mb-2">
                        <label>Total</label>
                        <div className="totals-value" id="cart-totals">$ 1070.00</div>
                    </div>
                </div>
                  
                <button className="checkout mb-5 mt-3 btn btn-outline-success">Checkout</button>
            
            </div>
        </div>
    
    );
}   

export default UserCart;
    
        



            
            

































                






        
        
    
    
                    
                
