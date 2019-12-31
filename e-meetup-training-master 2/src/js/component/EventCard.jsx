import React from 'react';
import { Link } from "react-router-dom";



function EventCard (props) {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container" alt="First slide">
                        <div className="container-card" >
                            <div className="card bg-dark text-white">
                                <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9Hb5UZVFv9DieDr4vg_AZMe7OvAPlLso2HBL-Cm7DQhrql-p"  alt="Card image" />
                                <style>{'.card {width: 174px; height: 233px;'}</style> 
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Event title</h5>
                                    <h5 className="card-title">date</h5>
                                    <p className="card-text">fdsafsdf svsdfsd  sdvsdsd  sdfdsfsdfsd sdfsdfsdf   dsfsdfdsf  sdfdsfdsf</p>
                                    <p className="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                            <div className="container-card">
                                <div className="card bg-dark text-white">
                                    <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpw85XGyy_V8hoYbfJzd4gFmZvZos3Vn8pxcKNh3Gfp5LEpR4IA"  alt="Card image" />
                                    <style>{'.card {width: 174px; height: 233px;'}</style> 
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Event title</h5>
                                        <h5 className="card-title">date</h5>
                                        <p className="card-text">fdsafsdf svsdfsd  sdvsdsd  sdfdsfsdfsd sdfsdfsdf   dsfsdfdsf  sdfdsfdsf</p>
                                        <p className="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-card">
                                <div className="card bg-dark text-white">
                                    <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLS2q0R7cDx3GMEuoq39G-C4DRjRo0sBAp7cvC28siNvradBqZ"  alt="Card image" />
                                    <style>{'.card {width: 174px; height: 233px;'}</style> 
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Event title</h5>
                                        <h5 className="card-title">date</h5>
                                        <p className="card-text">fdsafsdf svsdfsd  sdvsdsd  sdfdsfsdfsd sdfsdfsdf   dsfsdfdsf  sdfdsfdsf</p>
                                        <p className="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container" alt="Second slide">
                            <div className="container-card" >
                                <div className="card bg-dark text-white">
                                    <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9Hb5UZVFv9DieDr4vg_AZMe7OvAPlLso2HBL-Cm7DQhrql-p"  alt="Card image" />
                                    <style>{'.card {width: 174px; height: 233px;'}</style> 
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Event title</h5>
                                        <h5 className="card-title">date</h5>
                                        <p className="card-text">fdsafsdf svsdfsd  sdvsdsd  sdfdsfsdfsd sdfsdfsdf   dsfsdfdsf  sdfdsfdsf</p>
                                        <p className="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-card">
                                <div className="card bg-dark text-white">
                                    <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpw85XGyy_V8hoYbfJzd4gFmZvZos3Vn8pxcKNh3Gfp5LEpR4IA"  alt="Card image" />
                                    <style>{'.card {width: 174px; height: 233px;'}</style> 
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Event title</h5>
                                        <h5 className="card-title">date</h5>
                                        <p className="card-text">fdsafsdf svsdfsd  sdvsdsd  sdfdsfsdfsd sdfsdfsdf   dsfsdfdsf  sdfdsfdsf</p>
                                        <p className="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-card">
                                <div className="card bg-dark text-white">
                                    <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLS2q0R7cDx3GMEuoq39G-C4DRjRo0sBAp7cvC28siNvradBqZ"  alt="Card image" />
                                    <style>{'.card {width: 174px; height: 233px;'}</style> 
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Event title</h5>
                                        <h5 className="card-title">date</h5>
                                        <p className="card-text">fdsafsdf svsdfsd  sdvsdsd  sdfdsfsdfsd sdfsdfsdf   dsfsdfdsf  sdfdsfdsf</p>
                                        <p className="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
            
export default EventCard;           
            