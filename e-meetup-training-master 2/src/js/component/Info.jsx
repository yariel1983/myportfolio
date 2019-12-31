import React from 'react';
import { Link } from "react-router-dom";
import faUser from '@fortawesome/fontawesome-free-regular/faUser';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function info(props) {
    return (
        <div className="col-md-12 text-white">
            <form>
                <legend><span className="glyphicon glyphicon-globe"></span> Our Office</legend>
                <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.900434804487!2d-80.19714558495687!3d25.773852014387803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69bc4ede3f9%3A0xd83da1cde65f9289!2s66+W+Flagler+St%2C+Miami%2C+FL+33130!5e0!3m2!1sen!2sus!4v1534819088731" width="300" height="150" frameBorder="0" border="0" allowFullScreen></iframe>
                </div>
                <address>
                    <strong>Xtreme Training Products and Videos Inc. </strong>
                    <br/>
                    {/*66 W Flagler St #900,
                    <br/>
                    Miami, FL 33130 &nbsp;
                    <abbr title="Phone">
                    </abbr>
                    Phone: +1 (786) 808-5655
                </address>
                <address>
                    <strong>Email Address</strong><br/>
                    <a href="mailto:#">support@xtremetraining.com</a>*/}
                </address>
            </form>
        </div>
                


    );
}
export default info;                                                          
 