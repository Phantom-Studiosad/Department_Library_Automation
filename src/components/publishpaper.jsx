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
                        <div class="containerr-fluid" id="grad1">
                            <div class="row justify-content-center mt-0">
                                <div class="text-center">
                                    <div class="rcard px-0 pt-4 pb-0 mt-3 mb-3">
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
                                                                <input class="form-control" id="title" maxlength="255" minlength="1" name="title" required type="text" ></input>
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
                                                        <div class="form-card">
                                                            <h2 class="fs-title">Personal Information</h2> 
                                                            <div>
                                                            <label class="form-control-label" for="department_area" style={{fontSize:'20px'}}>Department Area Collection</label>
                                                            <select class="form-control dept-area-grp" id="department_area" name="department_area" required="" style={{width:'20%',height:'75%', border:'1px solid black',padding:'6px 6px'}}>
                                                            <optgroup label="Computer Science and Engineering">
                                                                <option value="1">Artificial Intelligence</option>

                                                                <option value="2">Machine Learning</option>

                                                                <option value="3">Neural Networks</option>

                                                                <option value="4">Cloud Computing</option>
                                                                
                                                                <option value="5">Internet Of Things</option>
                                                            </optgroup>

                                                            <optgroup
                                                                label="Electronics and Communication Engineering"
                                                            ></optgroup>

                                                            <optgroup label="Mechanical Engineering"></optgroup>
                                                            </select>

                                                            </div>
                                                            <div class="form-group" style={{fontSize:'20px'}}>
                                                                <label class="form-control-label" for="authors">Author</label>
                            
                                                                <input
                                                                    class="form-control"
                                                                    id="author"
                                                                    maxlength="255"
                                                                    minlength="1"
                                                                    name="author"
                                                                    required
                                                                    type="text"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="form-card">
                                                            <div class="form-group" style={{fontSize:'20px'}}>
                                                                <label class="form-control-label" for="publisher">Publisher</label>
                                                
                                                                <input
                                                                class="form-control"
                                                                id="publisher"
                                                                maxlength="255"
                                                                minlength="1"
                                                                name="publisher"
                                                                required
                                                                type="text"
                                                                />
                                                            </div>
                                                
                                                            <div class="form-group" style={{fontSize:'20px'}}>
                                                                <label class="form-control-label" for="published_year">Publishing Year</label>
                                                
                                                                <input
                                                                class="form-control"
                                                                id="published_year"
                                                                max="2022"
                                                                name="published_year"
                                                                required
                                                                type="number"
                                                                />
                                                            </div>
                                                        </div> 
                                                        <div class="form-card">
                                                            <div class="form-group" style={{fontSize:'20px'}}>
                                                                <label class="form-control-label" for="abstract">Abstract</label>
                                                                <textarea type="text" id="abstract" name="abstract"  class="form-control " required></textarea>                                                
                                                            </div>
                                                
                                                            <div class="form-group" style={{fontSize:'20px'}}>
                                                                <label class="form-control-label" for="paper_file">Upload file as pdf</label>
                                                                <input
                                                                class="form-control"
                                                                id="paper_file"
                                                                name="paper_file"
                                                                type="file"
                                                                style={{backgroundColor:'transparent',border:'none'}}
                                                                />
                                                            </div>
                                                
                                                        </div>
                                                        <button id="submit" type="submit" class="btn btn-success" style={{fontSize:'18px'}}>
                                                                    <i class="fa fa-upload"></i> Publish Paper
                                                        </button>                                                 
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

