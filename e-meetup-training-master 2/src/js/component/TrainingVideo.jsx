import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlayCircle from '@fortawesome/fontawesome-free-solid/faPlayCircle';

function TrainingVideo(props){
    return (
        <div>    
            {/*<div id="video-carousel-example2" className="carousel slide carousel-fade" data-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-target="#video-carousel-example2" data-slide-to="0" className="active"></li>
                    <li data-target="#video-carousel-example2" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner text-center" role="listbox">
                    <div className="carousel-item active">
                        <div className="view">
                            <video className="video-fluid" autoPlay loop id="trainingvideoslide">
                                <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
                            </video>
                            
                            <div className="mask rgba-indigo-light"></div>
                        </div>
                        <div className="carousel-caption">
                            <div className="animated fadeInDown">
                                <h3 className="h3-responsive text-white">Welcome to Xtreme Training Academy</h3>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="view">
                            <video className="video-fluid" autoPlay loop id="trainingvideoslide">
                                <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
                            </video>
                            <div className="mask rgba-purple-slight"></div>
                        </div>
                        <div className="carousel-caption">
                            <div className="animated fadeInDown">
                                <h3 className="h3-responsive">Welcome to Xtreme Training Academy</h3>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>*/}
            <div className="container-fluid mt-5" id="pb-video-container">
                <div className="col-md-12 col-md-offset-1 text-center">
                    
                    <button className="btn btn-dark mb-5">
                        <span><FontAwesomeIcon className="fas fa-search text-light fa-2x" icon={faPlayCircle} /></span>
                        <h3 className="text-center text-white mb-2">Gallery</h3>
                    </button>
                    
                    <div className="row pb-row" id="trainingvideosrow">
                        <div className="col-md-3" id="trainingvideosid">
                            <iframe className="pb-video-frame" id="trainingvideosframe" width="100%" height="230" src="https://www.youtube.com/embed/Tx3W6XAO7Yo" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center btn-primary">Calorie Blasting Cardio Training</label>
                        </div>
                        <div className="col-md-3" id="trainingvideosid">
                            <iframe className="pb-video-frame" id="trainingvideosframe" width="100%" height="230" src="https://www.youtube.com/embed/plVyo39og3I" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center btn-primary">Sarah Pardue Fitness Guide</label>
                        </div>
                        <div className="col-md-3" id="trainingvideosid">
                            <iframe className="pb-video-frame" id="trainingvideosframe" width="100%" height="230" src="https://www.youtube.com/embed/P84ktN7w-EM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center btn-primary">Full Body Cable Workout</label>
                        </div>
                        <div className="col-md-3" id="trainingvideosid">
                            <iframe className="pb-video-frame" id="trainingvideosframe" width="100%" height="230" src="https://www.youtube.com/embed/Y1_VsyLAGuk?list=RDzuAcaBkcYGE?ecver=1" frameBorder="0" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center btn-primary">Full Body Workout</label>
                        </div>
                    </div>
                    <div className="row pb-row" id="trainingvideosrow">
                        <div className="col-md-3" id="trainingvideosid">
                            <iframe className="pb-video-frame" id="trainingvideosframe" width="100%" height="230" src="https://www.youtube.com/embed/24fdcMw0Bj0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center btn-primary">The Rock Workout</label>
                        </div>
                        <div className="col-md-3" id="trainingvideosid">
                            <iframe className="pb-video-frame" id="trainingvideosframe" width="100%" height="230" src="https://www.youtube.com/embed/wyNPbHOX_EI" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center btn-primary">Jhon Cena Workout</label>
                        </div>
                        <div className="col-md-3" id="trainingvideosid">
                            <iframe className="pb-video-frame" id="trainingvideosframe" width="100%" height="230" src="https://www.youtube.com/embed/zMPMJo5kdVc" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center btn-primary">Ryback Workout</label>
                        </div>
                        <div className="col-md-3" id="trainingvideosid">
                            <iframe className="pb-video-frame" id="trainingvideosframe" width="100%" height="230" src="https://www.youtube.com/embed/BWyN0bngHQs" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center btn-primary">Dave Batista Workout</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        );
    }
    
    export default TrainingVideo;
                        
            
    
                        
            
            
                
    
                                    
                        
                            
                            
       
            
               
                    
    
                
                
            
                
                    
    
                
               
            
                
                    
    
                
                
            
        
    
        
                