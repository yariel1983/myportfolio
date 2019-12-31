import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function Banner(props){
    return (
     
        <div>    
            <div>   
                <div className="container mt-5 mb-5">  
                    <p className="text-center"></p>
                    <div className="row">
                        <aside className="col-sm-4">
                            <p></p>
                
                            <div className="card-banner  overlay-grad" id="banner1">
                            
                                <div className="card-body text-white">
                                    <h5 className="card-title">Primary text as title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div> 
                
                        </aside>
                        <aside className="col-sm-4">
                            <p></p>
                            <div className="card-banner" id="banner2">
                                <article className="overlay overlay-cover d-flex align-items-center justify-content-center">
                                    <div className="text-center">
                                        <h5 className="card-title">Primary text as title</h5>
                                        <a href="#" className="btn btn-warning btn-sm"> View more </a>
                                    </div>
                                </article>
                            </div> 
                
                        </aside>
                        <aside className="col-sm-4">
                            <p></p>
                            <div className="card-banner align-items-end" id="banner3">
                                <article className="overlay m-4 w-100">
                                    <h5 className="card-title">Primary text as title</h5>
                                    <a href="#" className="btn btn-warning btn-sm"> View more </a>
                                </article>
                            </div> 
                
                        </aside>
                    </div>
                </div>
                <article className="bg-secondary mb-0">  
                    <div className="card-body text-center">
                        <h4 className="text-white"></h4>
                        <p className="h5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                        <p><a className="btn btn-warning" target="" href="#">Learn More 
                            <i className="fa fa-window-restore "></i></a></p>
                    </div>
                </article>                    
                <div className="container-fluid mt-0 pb-5">
                    <div className="img-default">
                        <img className="card-img-top" src="https://wallpapermemory.com/uploads/510/gym-wallpaper-full-hd-1920x1080-301981.jpg" alt="Card image cap" height="500px"/>
                    </div>
                </div>
            </div>
        </div>            
                    
            
    
            
            
    
        

            );
}   
    
export default Banner;
                        
              
                            
            
                            
                            
                        
                        