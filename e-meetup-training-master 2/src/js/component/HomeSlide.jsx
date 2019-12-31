import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {withSession} from '../stores/AppContext.jsx';
import $ from "jquery";
import {Consumer} from "../stores/AppContext.jsx";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-regular/faUser';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';


import Modal from 'react-responsive-modal';


class HomeSlide extends React.Component{
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
    
    /*componentDidUpdate(prevProps, prevState) {
        // Previous ThemeContext value is prevProps.theme
        // New ThemeContext value is this.props.theme
        if(this.props.session.token) $('#exampleModal').modal('hide');
    }*/

    render(){
        let homeActive = this.props.currentView === "home" ? "active" :"";
        const { open } = this.state;
        const {session, actions, cartNumItem} = this.props;



    return (
        
        <div>    
            <div>    
                <div className="container-fluid">
                    <div className="item active">
                        <video className="video-fluid" autoPlay loop id="trainingvideoslide">
                            <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
                        </video>
            
                        <div className="header-text text-center fa-5x hidden-xs">
                            <div className="main_title">
                                <h1>Xtreme Training Academy</h1>
                                <p>Please Sign in or Register.</p>
                            </div>  
                            
                            {
                                        session && typeof(session.user_nicename) !== 'undefined' ?
                                            
                                            <div className="d-sm-inline-flex align-items-sm-center" id="dropmenu">
                                                <div className="linkRegister m-0 p-0">
                                                    <Link className="nav-item nav-link m-0 p-0" to={"/Register"}>
                                                        Hello, {session.user_nicename}
                                                        {/*.charAt(0).toUpperCase()+session.user_display_name.substring(1)}*/}
                                                    </Link>
                                                </div>
                                                <div className="linkRegister m-0 p-0">
                                                    <Link  className="nav-item nav-link " to={"/"} >
                                                        <span className="nav-item nav-link m-0 p-0" href="#" onClick={() => actions.logout()}>&nbsp;  Logout </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        :
                                            <div className="">
                                                <div className="btn btn-theme btn-sm btn-min-block" href="#" onClick={this.onOpenModal}>Login</div>    
                                                <Link className="nav-item nav-link " to={"/Register"}>
                                                    <div className="btn btn-theme btn-sm btn-min-block" href="#">Register</div>
                                                </Link>    
                                    
                                            </div>    
                                    }
                                    
                            <div className="containerModalNavbar">
                                <div ref={this.myRef} />
                                <Modal open={open} onClose={this.onCloseModal} center container={this.myRef.current}>
                                    <button className="btn btn-dark rounded-circle mb-3">
                                        <span><FontAwesomeIcon className="fas fa-search text-light fa-2x" icon={faUser} /></span>
                                    </button>
                                    <div className="formModal">
                                        <form role="form" onSubmit={(e) => {e.preventDefault();
                                                                            actions.loadSession(this.state.username, this.state.password);
                                                                            this.onCloseModal();
                                                                            {/* actions.loadSession(this.state.username, this.state.password) ?
                                                                                
                                                                                this.onCloseModal()
                                                                                
                                                                            :
                                                                                alert('Error, contact to administrator');
                                                                                
                                                                            */}
                                                                            }} className="col-sm-12 p-0">
                                            <div className="containerUserFormModal">
                                                <div className="form-group row m-0">
                                                    <div className="col-12 col-sm-12 align-content-center  p-0">
                                                        <div className="col-10 col-sm-10 ml-4 mb-0 mr-0 mt-0 p-0">
                                                            <style>{'.col-10 {line-height: 0.5 !important}'}</style>
                                                            <input className="inputUserModal form-control is-valid form-control-sm" type="text" name="user" value={this.state.username} placeholder="Username" onChange={(e) => this.setState({username: e.target.value})} required/>&nbsp;&nbsp;
                                                            <style>{'.inputUserModal {border-color: #343a40 !important }'}</style>
                                                        </div>
                                                        <div className="col-10 col-sm-10 ml-4 mb-1 p-0">
                                                            <input className="inputPasswordModal form-control is-valid form-control-sm" type="password" name="password" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} required/>
                                                            <style>{'.inputPasswordModal {border-color: #343a40 !important}'}</style>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 m-0 p-0">
                                                        <div className="d-flex flex-row-reverse p-2 ">    
                                                            <div className="firstButtonModal order-1  ">
                                                                <small><button className="btn btn-outline-dark btn-sm ml-auto" type="submit" id="submitbotton">Login</button></small>
                                                            </div>
                                                            <div className="SecondButtonModal order-0 ml-2 ">
                                                                <button className="btn btn-outline-dark btn-sm ml-auto" type="button" onClick={this.onCloseModal}>Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Modal>
                        
                        
                                
                            </div>
                                
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>

            );
        }
}

            
export default withSession(HomeSlide);


HomeSlide.propTypes = {
  session: PropTypes.object,
  actions: PropTypes.object,
  currentView: PropTypes.string,
  cartNumItem: PropTypes.number
};
    