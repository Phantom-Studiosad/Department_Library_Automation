import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css"
import Foot from './footer';
import { Link } from "react-router-dom";
import splash_bg from '../images/Library.gif'
import Avatar from "../images/avatar.png"
import Popup from 'reactjs-popup';


function RHomepage(){
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
                                                    <hr></hr>
                                                    <div class="hp_profile">
                                                        <p><i class="fa fa-user" style={{marginRight:"15px"}}></i>Ashwanth K</p>
                                                        <p><i class="fa fa-credit-card" style={{marginRight:"15px"}}></i>CB.EN.U4CSE19305</p>
                                                        <p><i class="fa fa-book" style={{marginRight:"15px"}}></i>RScholar (CSE)</p>                                                       
                                                    </div>                                                    
                                                </div>
                                            </div>
                                            <br></br>

                                            <div class="w3-card w3-round homepage_bg" style={{textAlign:"center"}}>
                                                <div class="w3-container">
                                                    <h4 class="w3-center">Borrowed Books</h4>
                                                    <hr></hr>
                                                    <div class="hp_profile">
                                                        <p><i class="fa fa-book" style={{marginRight:"15px"}}></i>Book1</p>     
                                                        <p><i class="fa fa-book" style={{marginRight:"15px"}}></i>Book2</p>     
                                                        <p><i class="fa fa-book" style={{marginRight:"15px"}}></i>Book3</p>                                                       
                                                    </div>                                                    
                                                </div>
                                            </div>                                                    
                                            <br></br>

                                            <div class="w3-card w3-round homepage_bg w3-hide-small">
                                                <div class="w3-container">
                                                    <p>Interests</p>
                                                    <p>
                                                        <span class="w3-tag w3-small w3-theme-d5">Classics</span>                                                        
                                                        <span class="w3-tag w3-small w3-theme-d3">Fantasy</span>
                                                        <span class="w3-tag w3-small w3-theme-d2">Horror</span>
                                                        <span class="w3-tag w3-small w3-theme-d1">Romance</span>
                                                        <span class="w3-tag w3-small w3-theme">Sci-Fi</span>
                                                        <span class="w3-tag w3-small w3-theme-l1">Suspense</span>
                                                        <span class="w3-tag w3-small w3-theme-l2">Thrillers</span>
                                                        <span class="w3-tag w3-small w3-theme-d4">Comic Book or Graphic Novel</span>
                                                    </p>
                                                </div>
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
                                                <p>Despite its title, “Asymmetry” comprises two seemingly unrelated sections of equal length, appended by a slim and quietly shocking coda. Halliday’s prose is clean and lean, almost reportorial in the style of W. G. Sebald, and like the murmurings of a shy person at a cocktail party, often comic only in single clauses. It’s a first novel that reads like the work of an author who has published many books over many years.</p>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-thumbs-up"></i>  Like</button>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-comment"></i>  Comment</button>                                                
                                            </div>

                                            <div class="w3-container w3-card homepage_bg w3-round w3-margin"><br></br>
                
                                                <span class="w3-right w3-opacity">32 min</span>
                                                <h4>Angie Jane</h4><br></br>
                                                <hr class="w3-clear"></hr>
                                                <p>Have you seen this?</p>

                                                <p>Doane creates a relatable protagonist in The Narrator, whose personal growth doesn’t erase his faults. His willingness to hit the road with few resources is admirable, and he’s prescient enough to recognize the jealousy of those who cannot or will not take the leap. His encounters with new foods, places, and people broaden his horizons. Yet his immaturity and selfishness persist. He tells Rosie she’s been a good mother to him but chooses to ignore the continuing concern from his own parents as he effectively disappears from his old life.</p>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-thumbs-up"></i>  Like</button>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-comment"></i>  Comment</button> 
                                            </div> 

                                            <div class="w3-container w3-card homepage_bg w3-round w3-margin"><br></br>
                
                                                <span class="w3-right w3-opacity">16 min</span>
                                                <h4>Jane Doe</h4><br></br>
                                                <hr class="w3-clear"></hr>
                                                <p> The hype around this book has been unquestionable and, admittedly, that made me both eager to get my hands on it and terrified to read it. I mean, what if I was to be the one person that didn’t love it as much as others? (That seems silly now because of how truly mesmerizing THUG was in the most heartbreakingly realistic way.) However, with the relevancy of its summary in regards to the unjust predicaments POC currently face in the US, I knew this one was a must-read, so I was ready to set my fears aside and dive in. That said, I had an altogether more personal, ulterior motive for wanting to read this book. </p>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-thumbs-up"></i>  Like</button>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-comment"></i>  Comment</button> 
                                            </div> 
                                        </div>

                                        <div class="w3-col m3">
                                            <div class="w3-card w3-round homepage_bg" style={{textAlign:"center"}}>
                                            <h4 class="w3-center">Upcoming Due</h4>
                                            <hr></hr>
                                                <div class="hp_profile">
                                                    <p><i class="fa fa-book" style={{marginRight:"10px"}}></i>Book1   2Days</p>     
                                                    <p><i class="fa fa-book" style={{marginRight:"10px"}}></i>Book2   1Day</p>                                                           
                                                </div> 
                                            </div>
                                            <br></br>
                                            
                                            <div class="w3-card w3-round homepage_bg w3-padding-16 w3-center">                                                
                                            <p>Pending Fines</p>
                                            <hr></hr>   
                                            <div class="hp_profile">
                                                <p>Amount: ₹0</p>  
                                                <Popup trigger={<button class="btn navbar-btn guestp margin-b"><span class="fa fa-rupee"></span> Pay Fine</button>} 
                                                            position="center center">
                                                            <div class="login_card">
                                                                <div class="login-container animated flipInX main-heading">
                                                                    <h3>Select Payment Mode</h3>
                                                                    <form class="margin-t">
                                                                        <div>
                                                                            <ul class="list-unstyled mb-0">
                                                                                <li>
                                                                                    <input type="radio" id="developer" name="payment_method" value="HTML"></input>
                                                                                    <label for="html"> Credit Card</label><br></br>
                                                                                </li>
                                                                                <li>
                                                                                    <input type="radio" id="developer" name="payment_method" value="HTML"></input>
                                                                                    <label for="html"> Debit Card</label><br></br>
                                                                                </li>
                                                                                <li>
                                                                                    <input type="radio" id="librarian" name="payment_method" value="HTML"></input>
                                                                                    <label for="html"> Upi</label><br></br>
                                                                                </li>
                                                                            </ul>                                                                        
                                                                        </div>
                                                                        <div class="text-c">
                                                                            <button type="button" class="btn navbar-btn loginp margin-b">Proceed To Pay</button>                                                                                   
                                                                        </div>                                            
                                                                    </form>
                                                                </div>                                                            
                                                            </div>
                                                </Popup>                                                        
                                            </div>                                                  
                                            </div>
                                            <br></br>
                                            
                                            <div class="w3-card w3-round homepage_bg w3-padding-16 w3-center">
                                                <h4 class="w3-center">Research Paper</h4>
                                                <Link to="/publishpaper"><button class="btn navbar-btn guestp margin-b"><span class="fa fa-pencil"></span>  Publish</button></Link>
                                            </div> <br></br>

                                            <div class="w3-card w3-round homepage_bg w3-padding-6 w3-center">
                                                <h4 class="w3-center">Bug Report</h4>
                                                <p><i class="fa fa-bug w3-xxlarge"></i></p>
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

export default RHomepage;

