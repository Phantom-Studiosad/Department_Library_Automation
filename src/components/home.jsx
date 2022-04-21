import React, { useState, useEffect } from 'react'
import '../App.css';
import Bod from './bod';
import Foot from './footer';
import Topbar from './topbar.jsx'
import BarLoader from "react-spinners/BarLoader";
import splash_bg from '../images/Library.gif'
import { Link } from "react-router-dom";

function Home(){
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
  

    return(
        <div id="colorlib-page">
          <div id="container-wrap">
            {
               loading ?

               <div class="cus2">
                 <img src={splash_bg} class="splash_logo1" alt="E-Library"></img>          
                 <div class="cus1">                   
                   <BarLoader
                   color={"#db2cc0"} 
                   loading={loading} 
                   size={10} 
                   width={250}/>
                 </div>
               </div>
              :
              <div id="colorlib-page">
                  <div id="container-wrap">
                  <Topbar></Topbar>   
                  <Bod></Bod>  <br></br>
                  <div class="searchBox">
                            <input class="searchInput"type="text" name="" placeholder="Search"></input>
                            <Link to="/booksearch">
                              <button class="searchButton">
                                  <i class="fa fa-search"></i>
                              </button>
                            </Link>
                  </div> 
                  <Foot></Foot>
                  
                  {showButton && (
                    <button onClick={scrollToTop} className="back-to-top" title="Scroll Up">
                        <span><i class="fa fa-chevron-circle-up"></i></span>
                    </button>
                  )}
                  </div>
              </div>
            }
          </div>
        </div>
    )
}
export default Home