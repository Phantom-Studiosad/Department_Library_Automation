import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css"
import Foot from './footer';
import { Link } from "react-router-dom";
import splash_bg from '../images/Library.gif'
import avatar from '../images/avatar.png'


function Profilepage(){
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 50) {
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
                oading={loading} 
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
                    <div class="container profilecont">
                        <div class="row glutters-sm">
                            <div class="col-md-4 mb-3"> 
                                <div class="profile_card">
                                    <div class="profile_card-body">
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <img src={avatar} alt="Admin" class="profile_img" ></img>                                         
                                            <div class="det">
                                            <h4>John Doe</h4>
                                            <p class="text-secondary mb-1">CSE Dept</p>
                                            <p class="text-muted font-size-sm">CB.EN.U4CSE001</p>
                                            <button class="btn btn-primary">Student</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div class="profile_card mt-3">
                                        <div class="user_soc">
                                            <p><a class="c_iconn" onClick={()=> window.open("tel:"+'+91 12345 67890')}><i class="fa fa-phone-square mt-4 fa-2x"> +91 12345 67890</i></a></p>
                                            <p><a class="c_iconn" onClick={()=> window.open("mailto:"+'contact@e_library.com')}><i class="fa fa-envelope mt-4 fa-2x"></i> xyz@gmail.com</a></p>
                                            <p><a class="c_iconn" onClick={()=> window.open("https://github.com/dharun-narayanan/Department_Library_Automation")}><i class="fa fa-globe mt-4 fa-2x"></i> Department_Library_Automation</a></p>
                                        </div>                                        
                                    </div>
                            </div>
                            <div class="col-md-8">
                                <div class="profile_card mb-3">
                                    <div class="profile_card-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                        <h6 class="mb-0">Full Name</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                        Kenneth Valdez
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row">
                                        <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                        fip@jukmuh.al
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row">
                                        <div class="col-sm-3">
                                        <h6 class="mb-0">Phone</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                        (239) 816-9029
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row">
                                        <div class="col-sm-3">
                                        <h6 class="mb-0">Mobile</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                        (320) 380-4539
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row">
                                        <div class="col-sm-3">
                                        <h6 class="mb-0">Address</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                        Bay Area, San Francisco, CA
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row">
                                        <div class="col-sm-12">
                                        <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="row gutters-sm">
                                    <div class="col-sm-6 mb-3">
                                        <div class="profile_card h-100">
                                            <div class="profile_card-body">
                                                <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 mb-3">
                                        <div class="profile_card h-100">
                                            <div class="profile_card-body">
                                                <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
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

export default Profilepage;

