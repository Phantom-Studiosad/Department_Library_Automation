import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css"
import Foot from './footer';
import { Link } from "react-router-dom";
import splash_bg from '../images/Library.gif'
import Avatar from "../images/avatar.png"
import Popup from 'reactjs-popup';


function PublishPaper(){
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);

    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)            
        }, 2500)
    }, [])
  
    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };
    return (
        <div>
          {
            loading?
            <div class="cus2">
                <img src={splash_bg} class="splash_logo1"></img>
                <div class="cus1">
                <PuffLoader
                color={"#db2cc0"} 
                loading={loading} 
                size={50} />
                </div>
            </div>
            :
            <div  id="colorlib-page">
                <div id="container-wrap">
                    <div class="hero-gradient1">
                        <div class="hero-fadeout-gradient1">
                            <div class="container-gradient" style={{paddingBottom:"5rem"}}>
                                <nav class="navbar navbar-inverse ">
                                    <div class="container">
                                        <div class="navbar-header">
                                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                            </button>
                                            <Link to="/"><a class="navbar-brand navi"><b><span class="nav_heading">E</span>-Library</b></a></Link>
                                        </div>
                                        <div class="collapse navbar-collapse" id="myNavbar">
                                            <ul class="nav navbar-nav navbar-right">
                                                <li><Link to="/opac"><b>OPAC</b></Link></li>
                                                <li><Link><b><span class="fa fa-globe" title='Blog'></span></b></Link></li>
                                                <li><Link><b><span class="fa fa-envelope" title='Messages'></span></b></Link></li>
                                                <li><Link><b><span class="fa fa-bell" title='Notifications'></span></b></Link></li>
                                                <li><Link to="/profilepage"><b><span class="fa fa-user" title='Profile'></span></b></Link></li>
                                            </ul>      
                                        </div>
                                    </div>
                                </nav>
                            </div>                                  
                        </div>  
                    </div>
                    <div class="container">
                        <div class="container-fluid" id="grad1">
                            <div class="row justify-content-center mt-0">
                                <div class="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                                    <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                        <h2><strong>Add details and upload your paper</strong></h2>
                                        <p>Fill all form field to go to next step</p>
                                        <div class="row">
                                            <div class="col-md-12 mx-0">
                                                <form id="msform">
                                                    <ul id="progressbar">
                                                        <li class="active" id="account"><strong>About</strong></li>
                                                        <li id="personal"><strong>Dept</strong></li>
                                                        <li id="payment"><strong>Publisher</strong></li>
                                                        <li id="confirm"><strong>upload</strong></li>
                                                    </ul> 
                                                    <fieldset>
                                                        <div class="form-card">
                                                            <div class="form-group" style={{fontSize:'20px'}}>
                                                                <label class="form-control-label" for="title">Title</label>
                            
                                                                <input
                                                                    class="form-control"
                                                                    id="title"
                                                                    maxlength="255"
                                                                    minlength="1"
                                                                    name="title"
                                                                    required
                                                                    type="text"
                                                                    value=""
                                                                />
                                                            </div>
                                                            <div class="form-group" style={{fontSize:'20px'}}>
                                                                <label class="form-control-label" for="paper_type">
                                                                You are publishing a</label>
                                                                <br />
                                                
                                                                <div class="form-check-inline" style={{fontSize:'16px'}}>
                                                                <label class="form-check-label" for="radio1">
                                                                    <input
                                                                    type="radio"
                                                                    class="form-check-input"
                                                                    id="radio1"
                                                                    name="optradio"
                                                                    value="option1"
                                                                    />Journal
                                                                </label>
                                                                </div>
                                                                <div class="form-check-inline" style={{fontSize:'16px'}}>
                                                                <label class="form-check-label" for="radio2">
                                                                    <input
                                                                    type="radio"
                                                                    class="form-check-input"
                                                                    id="radio2"
                                                                    name="optradio"
                                                                    value="option2"
                                                                    />Conference Paper
                                                                </label>
                                                                </div>
                                                                <div class="form-check-inline" style={{fontSize:'16px'}}>
                                                                <label class="form-check-label">
                                                                    <input
                                                                    type="radio"
                                                                    class="form-check-input"
                                                                    id="radio3"
                                                                    name="optradio"
                                                                    value="option3"
                                                                    />Research Paper
                                                                </label>
                                                                </div>
                                                            </div>
                                                        </div>     
                                                        <input type="button" name="next" class="next action-button" value="Next Step" />                                                   
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                                                                                                                             
                    </div>                  
                </div>
              <Foot></Foot>
              {showButton && (
                      <button onClick={scrollToTop} className="back-to-top" title="Scroll Up">
                          <span><i class="fa fa-chevron-circle-up"></i></span>
                      </button>
              )}
          </div>
          }
        </div>            
    )
}

export default PublishPaper;

