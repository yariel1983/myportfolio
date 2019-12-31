import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {withSession} from '../stores/AppContext.jsx';
import $ from "jquery";
import {Consumer} from "../stores/AppContext.jsx";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-regular/faUser';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';
import faDumbbell from '@fortawesome/fontawesome-free-solid/faDumbbell';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';


import Modal from 'react-responsive-modal';



class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
                        username: '',
                        password: '',
                        modal: false,
                        open: false  };
                        
        this.myRef = React.createRef();
    
        this.onOpenModal = this.onOpenModal.bind(this);    
        this.onCloseModal = this.onCloseModal.bind(this);
    }
    
    
    onOpenModal () {
        this.setState({ open: true });
    }


    onCloseModal () {
        this.setState({ open: false });
    }
    
    
    
    
    componentDidMount () {
       
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

 
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn;
    } else {
      $('.scroll-to-top').fadeOut;
    }
  });


    }
    /*componentDidUpdate(prevProps, prevState) {
        // Previous ThemeContext value is prevProps.theme
        // New ThemeContext value is this.props.theme
        if(this.props.session.token) $('#exampleModal').modal('hide');
    }*/

    render(){
        let homeActive = this.props.currentView === "home" ? "active" :"";
        const { open } = this.state;
        const {session, actions, cartNumItem} = this.props;
        
            return(
               
                <div>       
                    <a className="menu-toggle rounded" href="#">
                        <span><FontAwesomeIcon className="fas fa-bars fa-3x text-white" icon={faBars} /></span>
                    </a>
                    <nav id="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <li className="sidebar-brand">
                                <a className="js-scroll-trigger">Menu</a>
                            </li>
                            <li className="sidebar-nav-item">
                                <Link to={"/"} className="js-scroll-trigger" >Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="sidebar-nav-item">
                                <Link to={"/products"} className="js-scroll-trigger" >Products</Link>
                            </li>
                            <li className="sidebar-nav-item">
                                <Link to={"/training"} className="js-scroll-trigger" >Training Videos</Link>
                            </li>
                            <li className="sidebar-nav-item">
                                <Link to={"/contact"} className="js-scroll-trigger" >Contact us</Link>
                            </li>             
                            <li className="sidebar-nav-item">
                                <Link to={"/about"} className="js-scroll-trigger" >About us</Link>
                            </li>
                            <li className="sidebar-nav-item">
                                <Link to={"/cart"} className="js-scroll-trigger">
                                    <span>&nbsp;<FontAwesomeIcon className="fa ShoppingCart text-warning fa-2x" icon={faShoppingCart} /></span>
                                    <span className="badge badge-pill badge-danger" id="cartnoti">{cartNumItem}</span>
                                </Link>
                            </li>
                            
                        </ul>
                    </nav>                
                                        
                </div>    
            );
        }
}



export default withSession(Navbar);

Navbar.propTypes = {
  session: PropTypes.object,
  actions: PropTypes.object,
  currentView: PropTypes.string,
  cartNumItem: PropTypes.number
};
    
    

     {/*  old code 
     <div>   
                    <div className="container-fluid Navbar">
                        <nav className="navbar navbar-dark fixed-top align-items-center" id="mynavbar">
                            <Link to={"/"} className="nav-item d-flex mr-3">
                                <span>&nbsp;<FontAwesomeIcon className="fa Dumbbell text-dark fa-3x" icon={faDumbbell} /></span>
                            </Link>
                            <button className="navbar-toggler float-sm-md-lg-right border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon float-sm-md-lg-right"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                   
                                <Link to={"/"} className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></Link>
                                <Link to={"/products"} className="nav-item nav-link" >Products</Link>
                                {/*<Link to={"/DetailsProduct"} className="nav-item nav-link" >DetailsProduct</Link>*/}
                                {/*<Link to={"/training"} className="nav-item nav-link" >Training Videos</Link>
                                {/*<Link to={"/events"} className="nav-item nav-link" >Events</Link>*/}
                                {/*<Link to={"/contact"} className="nav-item nav-link" >Contact</Link>
                                <Link to={"/about"} className="nav-item nav-link" >About</Link>
                                <Link to={"/cart"} className="nav-item nav-link">
                                    <span>&nbsp;<FontAwesomeIcon className="fa ShoppingCart text-warning" icon={faShoppingCart} /></span>
                                    <span className="badge badge-pill badge-danger" id="cartnoti">{cartNumItem}</span>
                                </Link>
                                         
                            </div>          
                        </nav>          
                    </div>          
                </div>*/}        
                