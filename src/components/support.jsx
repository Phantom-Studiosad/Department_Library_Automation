import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css"
import Foot from './footer';
import Navbar from './navbar';
import Img1 from "../images/support.png"
import splash_bg from '../images/Library.gif'


function Support(){
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
                          <Navbar/>  
                          <div class="container">
                              <div>
                                  <img class="im1" src={Img1} alt="Vector Image"></img>  
                                  <div class="heading1">
                                  <h1>Support</h1>                
                                  </div>   
                              </div> 
                          </div>     
                      </div>  
                  </div>  
                  <div class="container">
                          <div class="container-fluid">
                              <div class="contact_card">
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

export default Support;

