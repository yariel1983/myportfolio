import React from 'react';
import { Link } from "react-router-dom";



function HomeSlide(props) {
    return (
        <div className="container-fluid text-center mb-5">
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">&nbsp;
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                </ol>
                <div className="carousel-inner mt-4">
                    <div className="carousel-item active">
                        <img className="d-block w-100 img-fluid" src="https://wallportal.com/uploads/posts/boxing-gym-wallpaper/boxing_gym_wallpaper_009.jpg" alt="Responsive image First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src="https://www.whatsteroids.com/wp-content/uploads/2017/05/gym-powerlifting.jpg" alt="Responsive image Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src="http://looklikeanathlete.com/wp-content/uploads/2016/12/minimalist-bodybuilding.jpg" alt="Responsive image Third slide"/>
                    </div>
                    
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>        

    
    );
}
            
export default HomeSlide;