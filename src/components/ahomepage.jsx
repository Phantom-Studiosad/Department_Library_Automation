import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css"
import Foot from './footer';
import { Link } from "react-router-dom";
import splash_bg from '../images/Library.gif'
import Avatar from "../images/avatar.png"


function AHomepage(){
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
                          <div class="homepage_container">     
                                    <div class="w3-row">
                                        <div class="w3-col m3">
                                            <div class="w3-card w3-round homepage_bg" style={{textAlign:"center"}}>
                                                <div class="w3-container">
                                                    <h4 class="w3-center">My Profile</h4>
                                                    <p class="w3-center"><img src={Avatar} class="w3-circle" alt="Avatar" style={{height:"106px",width:"106px"}}></img></p>
                                                    <p class="w3-center"></p>
                                                    <hr></hr>
                                                    <div class="hp_profile">
                                                        <p><i class="fa fa-user" style={{marginRight:"15px"}}></i>Admin </p>
                                                        <p><i class="fa fa-home" style={{marginRight:"15px"}}></i>London, UK</p>
                                                        <p><i class="fa fa-calendar" style={{marginRight:"15px"}}></i>April 1, 1988</p>
                                                    </div>                                                    
                                                </div>
                                            </div>
                                            <br></br>

                                            <div class="w3-card w3-round homepage_bg">
                                                <div>
                                                <button onclick="myFunction('Demo1')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups</button>
                                                <div id="Demo1" class="w3-hide w3-container">
                                                    <p>Some text..</p>
                                                </div>
                                                <button onclick="myFunction('Demo2')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events</button>
                                                <div id="Demo2" class="w3-hide w3-container">
                                                    <p>Some other text..</p>
                                                </div>
                                                <button onclick="myFunction('Demo3')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-users fa-fw w3-margin-right"></i> My Photos</button>
                                                <div id="Demo3" class="w3-hide w3-container">
                                                <div class="w3-row-padding">
                                                <br></br>
                                                <div class="w3-half">

                                                </div>
                                                <div class="w3-half">
                                                    
                                                </div>
                                                <div class="w3-half">
                                                
                                                </div>
                                                <div class="w3-half">
                                                    
                                                </div>
                                                <div class="w3-half">
                                                    
                                                </div>
                                                <div class="w3-half">
                                                
                                                </div>
                                                </div>
                                                </div>
                                                </div>      
                                            </div>
                                            <br></br>

                                            <div class="w3-card w3-round homepage_bg w3-hide-small">
                                                <div class="w3-container">
                                                    <p>Interests</p>
                                                    <p>
                                                        <span class="w3-tag w3-small w3-theme-d5">News</span>
                                                        <span class="w3-tag w3-small w3-theme-d4">W3Schools</span>
                                                        <span class="w3-tag w3-small w3-theme-d3">Labels</span>
                                                        <span class="w3-tag w3-small w3-theme-d2">Games</span>
                                                        <span class="w3-tag w3-small w3-theme-d1">Friends</span>
                                                        <span class="w3-tag w3-small w3-theme">Games</span>
                                                        <span class="w3-tag w3-small w3-theme-l1">Friends</span>
                                                        <span class="w3-tag w3-small w3-theme-l2">Food</span>
                                                        <span class="w3-tag w3-small w3-theme-l3">Design</span>
                                                        <span class="w3-tag w3-small w3-theme-l4">Art</span>
                                                        <span class="w3-tag w3-small w3-theme-l5">Photos</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <br></br>

                                            <div class="w3-container homepage_bg  w3-round w3-hide-small">
                                                <p><strong>Hey!</strong></p>
                                                <p>People are looking at your profile. Find out who.</p>
                                            </div>

                                        </div>

                                        <div class="w3-col m6">
                                            <div class="w3-row-padding">
                                                <div class="w3-col m12">
                                                <div class="w3-card w3-round homepage_bg">
                                                    <div class="w3-container w3-padding">
                                                    <h6 class="w3-opacity">Blog post</h6>
                                                    <p contenteditable="true" class="w3-border w3-padding">Status: Feeling Blue</p>
                                                    <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-pencil"></i>  Post</button> 
                                                    </div>
                                                </div>
                                                </div>
                                            </div>

                                            <div class="w3-container w3-card homepage_bg w3-round w3-margin"><br></br>
                                                <span class="w3-right w3-opacity">1 min</span>
                                                <h4>John Doe</h4><br></br>
                                                <hr class="w3-clear"></hr>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-thumbs-up"></i>  Like</button>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-comment"></i>  Comment</button>                                                
                                            </div>

                                            <div class="w3-container w3-card homepage_bg w3-round w3-margin"><br></br>
                
                                                <span class="w3-right w3-opacity">32 min</span>
                                                <h4>Angie Jane</h4><br></br>
                                                <hr class="w3-clear"></hr>
                                                <p>Have you seen this?</p>

                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-thumbs-up"></i>  Like</button>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-comment"></i>  Comment</button> 
                                            </div> 

                                            <div class="w3-container w3-card homepage_bg w3-round w3-margin"><br></br>
                
                                                <span class="w3-right w3-opacity">16 min</span>
                                                <h4>Jane Doe</h4><br></br>
                                                <hr class="w3-clear"></hr>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-thumbs-up"></i>  Like</button>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-comment"></i>  Comment</button> 
                                            </div> 
                                        </div>

                                        <div class="w3-col m3">
                                            <div class="w3-card w3-round homepage_bg w3-center">
                                                <div class="w3-container">
                                                <p>Upcoming Events:</p>
                                                
                                                <p><strong>Holiday</strong></p>
                                                <p>Friday 15:00</p>
                                                <p><button class="w3-button w3-block w3-theme-l4">Info</button></p>
                                                </div>
                                            </div>
                                            <br></br>
                                            
                                            <div class="w3-card w3-round homepage_bg w3-padding-16 w3-center">
                                                <p>ADS</p>
                                            </div>
                                            <br></br>
                                            
                                            <div class="w3-card w3-round homepage_bg w3-padding-32 w3-center">
                                                <p><i class="fa fa-bug w3-xxlarge"></i></p>
                                            </div>
                                            
                                        
                                            </div>
                                    </div>                        
                            </div>   
                            <div class="text-c">
                                <Link to="/book"><button class="btn navbar-btn guestp margin-b"><span class="fa fa-book"></span> Book</button></Link>
                                <Link to="/user"><button class="btn navbar-btn guestp margin-b"><span class="fa fa-user"></span> User</button></Link>
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

export default AHomepage;

