import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';


function FlipGallery(props){
    return (
        <section id="flipsection" className="pb-5">
            <div className="container">
                <h5 className="section-title h1" id="fliptittle"></h5>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="image-flip" >
                            <div className="mainflip">
                                <div className="frontside">
                                    <div className="card" id="flipcard">
                                        <div className="card-body text-center">
                                            <p>
                                                <img className=" img-fluid" alt="Team Cards Flipper" src="https://first-wordpress-jcabezas.c9users.io/wp-content/uploads/2019/05/Yariel.jpeg" />
                                            </p>
                                            <h4 className="card-title">Front end Developer</h4>
                                            <div className="list-inline mr-2 mb-0">
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                            </div>&nbsp;
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <a href="#" className="btn btn-primary btn-sm">More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4 className="card-title">Front-End Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <div className="card-body text-center">
                                                <p>
                                                    <img className=" img-fluid rounded-circle" alt="Team Cards Flipper" src="https://first-wordpress-jcabezas.c9users.io/wp-content/uploads/2019/05/Yariel.jpeg" />
                                                </p>
                                                
                                            </div>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-skype"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="image-flip" >
                            <div className="mainflip">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p>
                                                <img className="img-fluid rounded-circle" alt="" src="https://first-wordpress-jcabezas.c9users.io/wp-content/uploads/2019/05/Jobel.jpeg" />
                                            </p>
                                            <h4 className="card-title">Wordpress Developer</h4>
                                            <div className="list-inline mr-2 mb-0">
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                            </div>&nbsp;
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <a href="#" className="btn btn-primary btn-sm">More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4 className="card-title">Wordpress Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-skype"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="image-flip" >
                            <div className="mainflip">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p>
                                                <img className=" img-fluid" alt="" src="https://first-wordpress-jcabezas.c9users.io/wp-content/uploads/2019/05/Jesus.jpeg" /></p>
                                            <h4 className="card-title">Back-end Developer</h4>
                                            <div className="list-inline mr-2 mb-0">
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                            </div>&nbsp;
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <a href="#" className="btn btn-primary btn-sm">More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4 className="card-title">Back-end Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-skype"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>

    
    );
}   
    
export default FlipGallery;






























