import React, {Component} from "react";
import Navbar from './navbar'
import Img1 from "../images/img3.jpg"


export default class Topbar extends Component {
  render() {
    return (
      <div class="hero-gradient">        
        <div class="hero-fadeout-gradient">
            <Navbar/>  
            <div class="container">
              <div>
                <div class="home">
                <img class="im1" src={Img1} alt="Vector Image"></img>   
                  <div class="heading">
                    <h1>E-Library</h1><br></br>                    
                  </div>               
                  <p class="subhead">E-Library is a comprehensive digital learning solution to empower learners across all disciplines. 
                  Borrow free eBooks or search our databases for up-to-date popular and scholarly articles on a wide range of subjects. 
                  Learners can now access their course books as per their convenience, from anywhere, on any device. An end-to-end solution 
                  that helps deliver an analytics driven personalized learning experience.</p>
                </div>
              </div> 
            </div>     
        </div>  
      </div>    
    )
  }
}

