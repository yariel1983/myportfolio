import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";
import Info from '../component/Info.jsx';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

function Footer(props){
    return (
       
       
        <footer className="page-footer font-small indigo bg-light">
            <div className="container">
                <div className="row text-center d-flex justify-content-center pt-5 mb-3">
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to={"/about"} className="js-scroll-trigger" >About us</Link>
                        </h6>
                    </div>
                    
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to={"/products"} className="js-scroll-trigger" >Products</Link>
                        </h6>
                    </div>
                    
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to={"/training"} className="js-scroll-trigger" >Training Videos</Link>
                        </h6>
                    </div>
                    
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to={"/"} className="js-scroll-trigger" >Home <span className="sr-only">(current)</span></Link>
                        </h6>
                    </div>

                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to={"/contact"} className="js-scroll-trigger">Contact us</Link>
                        </h6>
                    </div>
                    
                </div>
                <hr className="bg-info"/>
                <div className="rgba-white-light" id="rgbawl">
                    <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                        <div className="col-md-8 col-12 mt-5">
                            <p id="footerp"></p>
                        </div>
                    </div>

                    
                    <div className="text-center fa-2x">
                        <a href="[full link to your Twitter]"/>
                        <img title="Twitter" src="https://socialmediawidgets.files.wordpress.com/2014/03/01_twitter.png" alt="Twitter" width="20" height="20" />
                        <a href="[full link to your Pinterest]"/> 
                        <img title="Pinterest" src="https://socialmediawidgets.files.wordpress.com/2014/03/13_pinterest.png" alt="Pinterest" width="20" height="20" />
                        <a href="[full link to your Facebook page]"/>
                        <img title="Facebook" src="https://socialmediawidgets.files.wordpress.com/2014/03/02_facebook.png" alt="Facebook" width="20" height="20" />
                        <a href="linkedinaddress"/>
                        <img title="LinkedIn" src="https://socialmediawidgets.files.wordpress.com/2014/03/07_linkedin.png" alt="LinkedIn" width="20" height="20" />
                        <a href="instagramaddress"/>
                        <img title="Instagram" src="https://socialmediawidgets.files.wordpress.com/2014/03/10_instagram.png" alt="RSS" width="20" height="20" />
                    </div>
                </div>
            </div>
                                
            <div className="footer-copyright text-center py-3">© 2018 Yariel Dominguez UI, All rights reserved
                    
            </div>
        </footer>

            );
}   
    
export default Footer;
 
            
         {/*<footer className="footer bg-dark text-white mt-5">
            <div className="container-footer">
                <div className="text-center">
                    <div className="d-flex">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control btn-sm mr-sm-0" type="search" placeholder="Search" aria-label="Search" id="navsearch"/>
                            <button className="btn btn-primary btn-sm text-white my-2 my-sm-0 mr-0" type="submit" id="navsearchbutton">
                                <span><FontAwesomeIcon className="fas fa-search text-dark" icon={faSearch} /></span>  
                            </button>
                        </form>
                    </div>           
                </div>  
                <ul className="text-center">
                    <li className="list-inline-item">
                        <small className="mb-1">Register for free</small>
                    </li>
                    <li className="list-inline-item">
                        <Link className="nav-item nav-link " to={"/Register"}>
                            <small><button type="button" className="btn btn-outline-warning btn-sm">Sign-Up!</button></small>
                        </Link>
                    </li>
                </ul>
                 
                <div className="textwidget text-center mb-1">
                    <div>
                        <a href="[full link to your Twitter]"/>
                        <img title="Twitter" src="https://socialmediawidgets.files.wordpress.com/2014/03/01_twitter.png" alt="Twitter" width="20" height="20" />
                        <a href="[full link to your Pinterest]"/> 
                        <img title="Pinterest" src="https://socialmediawidgets.files.wordpress.com/2014/03/13_pinterest.png" alt="Pinterest" width="20" height="20" />
                        <a href="[full link to your Facebook page]"/>
                        <img title="Facebook" src="https://socialmediawidgets.files.wordpress.com/2014/03/02_facebook.png" alt="Facebook" width="20" height="20" />
                        <a href="linkedinaddress"/>
                        <img title="LinkedIn" src="https://socialmediawidgets.files.wordpress.com/2014/03/07_linkedin.png" alt="LinkedIn" width="20" height="20" />
                        <a href="instagramaddress"/>
                        <img title="Instagram" src="https://socialmediawidgets.files.wordpress.com/2014/03/10_instagram.png" alt="RSS" width="20" height="20" />
                        <small><div className="footer-copyright text-center">© 2018 Yariel Dominguez UI, All rights reserved
                        </div></small>
                    </div>
                </div>
            </div>
                
            
            
        </footer>*/}
        
                
            
            
            


