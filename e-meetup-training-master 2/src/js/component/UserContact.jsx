import React from 'react';
import { Link } from "react-router-dom";
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Info from '../component/Info.jsx';







function UserContact(props) {
    return (
            
        <div className="container-fluid text-center mt-5" id="contbackimag">&nbsp;
            <Info />
            <div className="container-fluid py-3">
               
                <div className="row" id="loginpt">
                    <div className="col-md-6 mx-auto">
                        <div className="card card-body" id="contopacid">
                            <div className="form-group has-error">
                                <input className="form-control input-lg"  placeholder="E-mail Address" name="email" type="text" />
                                <div className="col-lg-12 text-left"><small><strong>E-mail Address:</strong></small></div>
                            </div>
                            <div className="form-group has-error">
                                <input className="form-control input-lg" placeholder="First Name" name="First Name" type="text" />
                                <div className="col-lg-12 text-left"><small><strong>First Name:</strong></small></div>
                            </div>
                            <div className="form-group has-error">
                                <input className="form-control input-lg" placeholder="Last Name" name="Last Name" type="text" />
                                <div className="col-lg-12 text-left"><small><strong>Last Name:</strong></small></div>
                            </div>
                            <label htmlFor="name"></label>
                            
                            <textarea name="message" id="message" className="form-control" rows="9" cols="25" required="required"
                            placeholder="Message"></textarea>
                            <input className="btn btn-lg btn-primary btn-block mt-4" value="Send" type="submit" />
                        </div> 
                    </div>
                </div>
            </div>
        </div>
               
                                
                          


    );
}
export default UserContact;                                                          
 
                            