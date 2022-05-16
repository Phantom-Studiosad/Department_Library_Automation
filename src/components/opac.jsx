import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css"
import Foot from './footer';
import Navbar from './navbar';
import splash_bg from '../images/Library.gif'
import Books from './books';


function Opac(){
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
                <div id="container-wrap" style={{minHeight:'80vh'}}>
                    <div class="hero-gradient1">
                        <div class="hero-fadeout-gradient1">
                            <Navbar/>                                
                        </div>  
                    </div>
                    <div class="container">
                        <div class="book_header main-heading">                            
                            <h1><i class="fa fa-book"></i> OPAC</h1>
                        </div>
                        <Books></Books>                                                                                                                 
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

export default Opac;

