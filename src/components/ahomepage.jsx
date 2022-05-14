import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css"
import Foot from './footer';
import { Link } from "react-router-dom";
import splash_bg from '../images/Library.gif'
import Avatar from "../images/avatar.png"
import Popup from 'reactjs-popup';
import app from '../firebase';
import { getDatabase, ref, child, get } from "firebase/database";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth"


function AHomepage(){
    const auth = getAuth(app);
    const [showButton, setShowButton] = useState(false);
    const [userEmail, setuserEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [role, setRole] = useState("");

   const  constructor = () =>{
        const user = auth.currentUser;
        const roll = userEmail.substring(3,10);
        if (user !== null) {
            setuserEmail(user.email);
            const dbRef = ref(getDatabase(app));
            get(child(dbRef, `Admin/${roll}`)).then((snapshot) => {
            if (snapshot.exists()) {
                setFname(snapshot.val().firstName.toUpperCase());
                setLname(snapshot.val().lastName.toUpperCase());
                setRole(snapshot.val().role);
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
        };
    };
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

    const logout = async () => {
        await signOut(auth);
        window.alert("Admin logged out successfully!")
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
            <div  id="colorlib-page" onLoad={constructor}>
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
                                                <li><Link to="/alogin" style={{margin:"0px",padding:"0px"}}><button class="btn navbar-btn login" onClick={logout}><span class="fa fa-sign-out"></span> LogOut</button></Link></li>
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
                                                        <p><i class="fa fa-user" style={{marginRight:"15px"}}></i>{fname} {lname}</p>
                                                        <p><i class="fa fa-credit-card" style={{marginRight:"15px"}}></i>{userEmail.substring(0,10).toUpperCase()}</p>
                                                        <p><i class="fa fa-book" style={{marginRight:"15px"}}></i>{role}</p>                                                       
                                                    </div>                                                    
                                                </div>
                                            </div>
                                            <br></br>

                                            <div class="w3-card w3-round homepage_bg" style={{textAlign:"center"}}>
                                                <div class="w3-container">
                                                    <h4 class="w3-center">Functionality</h4>
                                                    <hr></hr>
                                                    <div class="text-c">
                                                        <Link to="/book"><button class="btn navbar-btn guestp1 margin-b"><span class="fa fa-book"></span> Book</button></Link>
                                                        <Link to="/user"><button class="btn navbar-btn guestp1 margin-b"><span class="fa fa-user"></span> User</button></Link>
                                                    </div>                                                                                                       
                                                </div>
                                            </div>                                                    
                                            <br></br>
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
                                                <button class="btn navbar-btn guestp margin-b" ><i class="fa fa-comment"></i>  Comment</button>                                                
                                            </div>

                                            <div class="w3-container w3-card homepage_bg w3-round w3-margin"><br></br>
                
                                                <span class="w3-right w3-opacity">32 min</span>
                                                <h4>Angie Jane</h4><br></br>
                                                <hr class="w3-clear"></hr>
                                                <p>Have you seen this?</p>

                                                <p>Doane creates a relatable protagonist in The Narrator, whose personal growth doesn’t erase his faults. His willingness to hit the road with few resources is admirable, and he’s prescient enough to recognize the jealousy of those who cannot or will not take the leap. His encounters with new foods, places, and people broaden his horizons. Yet his immaturity and selfishness persist. He tells Rosie she’s been a good mother to him but chooses to ignore the continuing concern from his own parents as he effectively disappears from his old life.</p>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-thumbs-up"></i>  Like</button>
                                                <button class="btn navbar-btn guestp margin-b" ><i class="fa fa-comment"></i>  Comment</button> 
                                            </div> 

                                            <div class="w3-container w3-card homepage_bg w3-round w3-margin"><br></br>
                
                                                <span class="w3-right w3-opacity">16 min</span>
                                                <h4>Jane Doe</h4><br></br>
                                                <hr class="w3-clear"></hr>
                                                <p> The hype around this book has been unquestionable and, admittedly, that made me both eager to get my hands on it and terrified to read it. I mean, what if I was to be the one person that didn’t love it as much as others? (That seems silly now because of how truly mesmerizing THUG was in the most heartbreakingly realistic way.) However, with the relevancy of its summary in regards to the unjust predicaments POC currently face in the US, I knew this one was a must-read, so I was ready to set my fears aside and dive in. That said, I had an altogether more personal, ulterior motive for wanting to read this book. </p>
                                                <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-thumbs-up"></i>  Like</button>
                                                <button class="btn navbar-btn guestp     margin-b" ><i class="fa fa-comment"></i>  Comment</button> 
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
                                            <p>Fine Collected</p>
                                            <hr></hr>   
                                            <div class="hp_profile">
                                                <p>Amount: ₹0</p>  
                                                <Popup trigger={<button class="btn navbar-btn guestp1 margin-b"><span class="fa fa-rupee"></span> Total Fine</button>} 
                                                            position="center center">
                                                            <div class="pop_card box">
                                                                <div class="login-container1 animated flipInX main-heading">
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
                                                                            <button type="button" class="btn navbar-btn loginp1 margin-b">Proceed To Pay</button>                                                                                   
                                                                        </div>                                            
                                                                    </form>
                                                                </div>                                                            
                                                            </div>
                                                </Popup>                                                        
                                            </div>                                                  
                                            </div>
                                            <br></br>
                                            
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

export default AHomepage;

