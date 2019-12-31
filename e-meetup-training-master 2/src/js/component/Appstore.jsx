import React from 'react';
import { Link } from "react-router-dom";
import faMobile from '@fortawesome/fontawesome-free-solid/faMobile';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-regular/faStar';

function Appstore(props) {
    return (
        <div className="container-gallery">
            <div className="popup popup-1">
                <img className="img-fluid" alt="Pop Up Gallety" src="https://socialmediawidgets.files.wordpress.com/2014/03/01_twitter.png" />
            </div>
            <div className="popup popup-2">
                <img className="img-fluid" alt="Pop Up Gallety" src="https://socialmediawidgets.files.wordpress.com/2014/03/13_pinterest.png" />
            </div>
            <div className="popup popup-3">
                <img className="img-fluid" alt="Pop Up Gallety" src="https://socialmediawidgets.files.wordpress.com/2014/03/02_facebook.png" />
            </div>
            <div className="popup popup-4">
                <img className="img-fluid" alt="Pop Up Gallety" src="https://socialmediawidgets.files.wordpress.com/2014/03/07_linkedin.png" />
            </div>
            <div className="popup popup-5">
                <img className="img-fluid" alt="Pop Up Gallety" src="https://socialmediawidgets.files.wordpress.com/2014/03/10_instagram.png" />
            </div>
        </div>
    );
}
export default Appstore;                                                          
 