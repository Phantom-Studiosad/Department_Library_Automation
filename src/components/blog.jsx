import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css"
import Foot from './footer';
import Navbar from './navbar';
import splash_bg from '../images/Library.gif'


function Blog(){
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
                    <img src={splash_bg} class="splash_logo1" alt="logo"></img>
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
                                <Navbar/>  
                                <div class="container">
                                    <div class="blog">
                                        <div class="blog_heading">
                                            <h1>Blog</h1>                
                                        </div>   
                                        <h4>Welcome to the blog of E-Library <i class="fa fa-book"></i> </h4>
                                    </div> 
                                </div>     
                            </div>  
                        </div>  
                        <div class="container">
                                <div class="container-fluid">     
                                    <div class="container blog_cont">
                                        <div class="w3-row">
                                            
                                            <div class="w3-col l8 s12">
                                                <div class="w3-card-4 w3-margin blog_bg">
                                                    <div class="w3-container ">
                                                        <h3><b>TITLE HEADING</b></h3>
                                                        <h5>Title description, <span class="w3-opacity">April 7, 2014</span></h5>
                                                    </div>
                                                    <div class="w3-container">
                                                        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                                                        tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                                                        <div class="w3-row">
                                                        <div class="w3-col m8 s12">                                                    
                                                            <p><button class="btn navbar-btn loginp margin-b" >Read More <span class="fa fa-angle-double-right"></span></button></p>
                                                        </div>
                                                        <div class="w3-col m4 w3-hide-small">
                                                            <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-badge">6</span></span></p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="w3-card-4 w3-margin blog_bg">
                                                    
                                                    <div class="w3-container">
                                                        <h3><b>BLOG ENTRY</b></h3>
                                                        <h5>Title description, <span class="w3-opacity">April 2, 2014</span></h5>
                                                    </div>
                                                
                                                    <div class="w3-container">
                                                        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                                                        tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                                                        <div class="w3-row">
                                                        <div class="w3-col m8 s12">
                                                        <p><button class="btn navbar-btn loginp margin-b" >Read More <span class="fa fa-angle-double-right"></span></button></p>
                                                        </div>
                                                        <div class="w3-col m4 w3-hide-small">
                                                            <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-badge">2</span></span></p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="w3-card-4 w3-margin blog_bg">
                                                    <div class="w3-container ">
                                                        <h3><b>TITLE HEADING</b></h3>
                                                        <h5>Title description, <span class="w3-opacity">April 7, 2014</span></h5>
                                                    </div>
                                                    <div class="w3-container">
                                                        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                                                        tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                                                        <div class="w3-row">
                                                        <div class="w3-col m8 s12">                                                    
                                                            <p><button class="btn navbar-btn loginp margin-b" >Read More <span class="fa fa-angle-double-right"></span></button></p>
                                                        </div>
                                                        <div class="w3-col m4 w3-hide-small">
                                                            <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-badge">6</span></span></p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="w3-card-4 w3-margin blog_bg">
                                                    
                                                    <div class="w3-container">
                                                        <h3><b>BLOG ENTRY</b></h3>
                                                        <h5>Title description, <span class="w3-opacity">April 2, 2014</span></h5>
                                                    </div>
                                                
                                                    <div class="w3-container">
                                                        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                                                        tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                                                        <div class="w3-row">
                                                        <div class="w3-col m8 s12">
                                                        <p><button class="btn navbar-btn loginp margin-b" >Read More <span class="fa fa-angle-double-right"></span></button></p>
                                                        </div>
                                                        <div class="w3-col m4 w3-hide-small">
                                                            <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-badge">2</span></span></p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="w3-col l4">

                                                <div class="w3-card w3-margin w3-margin-top">
                                                
                                                <div class="w3-container blog_bg">
                                                    <h4><b>My Name</b></h4>
                                                    <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
                                                </div>
                                                </div>


                                                <div class="w3-card w3-margin blog_bg1">
                                                <div class="w3-container w3-padding">
                                                    <h4>Popular Posts</h4>
                                                </div>
                                                <ul class="w3-ul blog_hoverable blog_bg2">
                                                    <li class="w3-padding-16">
                                                    
                                                    <span class="w3-large">Lorem</span><br></br>
                                                    <span>Sed mattis nunc</span>
                                                    </li>
                                                    <li class="w3-padding-16">
                                                    
                                                    <span class="w3-large">Ipsum</span><br></br>
                                                    <span>Praes tinci sed</span>
                                                    </li> 
                                                    <li class="w3-padding-16">
                                                    
                                                    <span class="w3-large">Dorum</span><br></br>
                                                    <span>Ultricies congue</span>
                                                    </li>   
                                                    <li class="w3-padding-16 w3-hide-medium w3-hide-small">
                                                    
                                                    <span class="w3-large">Mingsum</span><br></br>
                                                    <span>Lorem ipsum dipsum</span>
                                                    </li>  
                                                </ul>
                                                </div>
                                                

                                                <div class="w3-card w3-margin blog_bg1">
                                                <div class="w3-container w3-padding">
                                                    <h4>Tags</h4>
                                                </div>
                                                <div class="w3-container blog_bg">
                                                <p><span class="w3-tag w3-black w3-margin-bottom">Travel</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
                                                    <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">IKEA</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">NORWAY</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">DIY</span>
                                                    <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Baby</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Family</span>
                                                    <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
                                                    <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Sports</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Games</span>
                                                </p>
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

export default Blog;

