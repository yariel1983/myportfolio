import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {Consumer} from "../stores/AppContext.jsx";
import {withSession} from '../stores/AppContext.jsx';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-regular/faUser';


class Login extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {  username: '', 
                        email: '',
                        password: '' };
    }
    
    
    render(){    
    let homeActive = this.props.currentView === "home" ? "active" :"";
        
    const { session, actions } = this.props;
    
    return (
        <div className="container text-center" id="logbackimag">
            <div className="container-fluid py-5">
                <div className="row" id="loginpt">
                    <div className="col-md-6 mx-auto">
                        <div className="card card-body" id="signopacid">
                            {
                            session && typeof(session.user_nicename) !== 'undefined' ?
                                <fieldset>
                                    <div className="form-group has-error">
                                        <button className="btn btn-dark rounded-circle mb-3">
                                            <span><FontAwesomeIcon className="fas fa-search text-light fa-5x" icon={faUser} /></span>
                                        </button>
                                        <h3>Profile</h3>
                                        <a href="#" className="btn btn-xs btn-default text-dark"><span className="glyphicon glyphicon-edit"></span>Edit</a>
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="E-mail Address" name="email" type="text" />
                                        <div className="col-lg-12 text-left"><small><strong>E-mail Address:</strong></small></div>
                                    </div>
                                    
                                    <div className="form-group has-success">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="Password" name="password" type="password" />
                                        <div className="col-lg-12 text-left"><small><strong>Password:</strong></small></div>
                                    </div>
                                    
                                    <div className="form-group has-success">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="Confirm Password" name="password" type="password" />
                                        <div className="col-lg-12 text-left"><small><strong>Confirm Password:</strong></small></div>
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="First Name" name="First Name" type="text" />
                                        <div className="col-lg-12 text-left"><small><strong>First Name:</strong></small></div>
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="Last Name" name="Last Name" type="text" />
                                        <div className="col-lg-12 text-left"><small><strong>Last Name:</strong></small></div>
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="Address Line 1" name="Address" type="text" />
                                        <div className="col-lg-12 text-left"><small><strong>Address line 1:</strong></small></div>
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="Address Line 2" name="Address" type="text" />
                                        <div className="col-lg-12 text-left"><small><strong>Address Line 2:</strong></small></div>
                                    </div>
                                        
                                        
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="City" name="City" type="text" />
                                        <div className="col-lg-12 text-left"><small><strong>City:</strong></small></div>
                                    </div>
                                            
                                    <div className="form-group has-error">
                                        <input type="text" className="form-control" value={session.user_nicename} id="validationTooltip04" placeholder="State" required />
                                        <div className="col-lg-12 text-left"><small><strong>State:</strong></small></div>
                                        <div className="invalid-tooltip">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                            
                                    <div className="form-group has-error">
                                        <input type="text" className="form-control" value={session.user_nicename} id="validationTooltip05" placeholder="Zip" required />
                                        <div className="col-lg-12 text-left"><small><strong>Zip:</strong></small></div>
                                        <div className="invalid-tooltip">
                                            Please provide a valid zip.
                                        </div>
                                    </div>
                                            
                                          
                                    <div className="form-group">
                                    </div>
    
          
                                    <div className="checkbox">
                                        <label className="small">
                                            <input className="terms mr-1" type="checkbox"/>I have read and agree to the <a href="#"> terms of service </a>
                                        </label>
                                        
                                        <input className="btn btn-lg btn-secondary btn-block" value="Update" type="submit" />
                                    </div>
                                </fieldset>
                            :
                                <fieldset>
                                    <form role="form" onSubmit={(e) => {e.preventDefault();
                                                                        actions.createUserloadSession (this.state.username, this.state.password, this.state.username, this.state.email); 
                                                                        actions.loadSession(this.state.username, this.state.password);
                                                                        {/* actions.loadSession(this.state.username, this.state.password) ?
                                                                            
                                                                            this.onCloseModal()
                                                                            
                                                                        :
                                                                            alert('Error, contact to administrator');
                                                                            
                                                                        */}
                                                                        }} className="col-sm-12 p-0">
                                        <div className="form-group ">
                                            <button className="btn btn-dark rounded-circle mb-3">
                                                <span><FontAwesomeIcon className="fas fa-search text-light fa-5x" icon={faUser} /></span>
                                            </button>
                                            <h3>Profile</h3>
                                            
                                            <a href="#" className="btn btn-xs btn-default text-dark"><span className="glyphicon glyphicon-edit"></span>Edit</a>
                                            <input className="form-control form-control-sm input-lg ml-1"  placeholder="Username" name="Username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} type="text" />
                                            <div className="col-lg-12 text-left"><small><strong>Username:</strong></small></div>
                                        
                                            <input className="form-control form-control-sm input-lg ml-1"  placeholder="E-mail Address" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type="text" required />
                                            <div className="col-lg-12 text-left"><small><strong>E-mail Address:</strong></small></div>
                                        </div>
                                        
                                        <div className="form-group has-success">
                                            <input className="form-control form-control-sm input-lg" placeholder="Password" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} type="password" required />
                                            <div className="col-lg-12 text-left"><small><strong>Password:</strong></small></div>
                                        </div>
                                        
                                        <div className="form-group has-success">
                                            <input className="form-control form-control-sm input-lg" placeholder="Confirm Password" name="password" value={this.state.Confirmpassword} onChange={this.handleInputChange} type="password" required />
                                            <div className="col-lg-12 text-left"><small><strong>Confirm Password:</strong></small></div>
                                        </div>
                                        
                                        {/*<div className="form-group has-error">
                                            <input className="form-control input-lg" placeholder="First Name" name="First Name" type="text" />
                                            <div className="col-lg-12 text-left"><small><strong>First Name:</strong></small></div>
                                        </div>
                                        
                                        <div className="form-group has-error">
                                            <input className="form-control input-lg" placeholder="Last Name" name="Last Name" type="text" />
                                            <div className="col-lg-12 text-left"><small><strong>Last Name:</strong></small></div>
                                        </div>
                                        
                                        <div className="form-group has-error">
                                            <input className="form-control input-lg" placeholder="Address Line 1" name="Address" type="text" />
                                            <div className="col-lg-12 text-left"><small><strong>Address Line 1:</strong></small></div>
                                        </div>
                                        
                                        <div className="form-group has-error">
                                            <input className="form-control input-lg" placeholder="Address Line 2" name="Address" type="text" />
                                            <div className="col-lg-12 text-left"><small><strong>Address Line 2:</strong></small></div>
                                        </div>
                                            
                                            
                                        <div className="form-group has-error">
                                            <input className="form-control input-lg" placeholder="City" name="City" type="text" />
                                            <div className="col-lg-12 text-left"><small><strong>City:</strong></small></div>
                                        </div>
                                                
                                        <div className="form-group has-error">
                                            <select id="State" name="State" className="form-control">
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="DC">District Of Columbia</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WA">Washington</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                            <div className="col-lg-12 text-left"><small><strong>State:</strong></small></div>
                                        </div>
                                            
                                                
                                        <div className="form-group has-error">
                                            <input type="text" className="form-control" id="validationTooltip05" placeholder="Zip" required />
                                            <div className="col-lg-12 text-left"><small><strong>Zip:</strong></small></div>
                                            <div className="invalid-tooltip">
                                                Please provide a valid zip.
                                                
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-lg-12 text-center mb-2"><strong>Credit Card Info:</strong></div>
                                            <div className="form-control input-lg mb-3 pb-4">
                                                <div className="col-lg-12"><strong>Card Type:</strong></div>
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
                                                <div className="col-lg-12"><input type="text" className="form-control" name="car_number" value={session.user_nicename} /></div>
                                            </div>
                                            <div className="form-group form-control input-lg mb-3 pb-4">
                                                <div className="col-lg-12"><strong>Card CVV:</strong></div>
                                                <div className="col-lg-12"><input type="text" className="form-control" name="car_code" value={session.user_nicename} /></div>
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
                                        <div className="checkbox">
                                            <label className="small">
                                                <input className="terms mr-1" type="checkbox"/>I have read and agree to the <a href="#">terms of service</a>
                                            </label>
                                            <img src="https://static.shoplightspeed.com/shops/606600/files/001462255/cards.jpg" width="230 px" height="60 px"/>
                                        </div>*/}
                                        <div className="buttonCreateUser">
                                            <input className="btn btn-lg btn-secondary btn-block text-white" value="Sign Me Up" type="submit" />
                                        </div>
                                    </form>
                                </fieldset>                                
                                }
                                        
                        </div>
                    </div>
                </div>
            </div>
        </div>        
                                        

    );
}
}
Login.propTypes = {
    username: PropTypes.string,
    session: PropTypes.object,
    actions: PropTypes.object,
    currentView: PropTypes.string
    };
            
export default withSession(Login);
 
                                                    
                                        
                                        