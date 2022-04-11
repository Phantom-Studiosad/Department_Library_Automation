import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css"
import Foot from './footer';
import Navbar from './navbar';
import Img1 from "../images/login.png"
import  { Link } from 'react-router-dom'
import splash_bg from '../images/Library.gif'
import StarfieldAnimation from './animation/starfieldanimation'
import app from '../firebase'
import Popup from 'reactjs-popup';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth"


function ALogin(){
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginPin, setLoginPin] = useState("");
  const auth = getAuth(app);

  const login = async () => {
      try {
          if(loginEmail.includes("cb.admin.amrita.edu")){
            if(loginPin.includes("admin123")){
              await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((u)=>{
                window.alert('Admin Login successful')
                console.log(u)
              }).catch((error) => {
              window.alert(error);
              }); 
            }  else window.alert("Wrong pin");                     
          }
          else window.alert("Wrong username");
      } catch (error) {
        window.alert(error);
      }
    };
    const logout = async () => {
      await signOut(auth);
    };

    const forgotPassword = async () => {
      try{
          if(loginEmail.includes("cb.admin.amrita.edu")){
              await sendPasswordResetEmail(auth, loginEmail).then((u) => {
                  window.alert("Reset email has been sent to your email!")
                  console.log(u)
              }).catch(function (e) {
                  console.log(e)
              })
          }
          else window.alert("Incorrect Email");
      }catch (error) {
          window.alert(error);
        } 
  };

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
        }, 2200)
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
              <StarfieldAnimation
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                  }}
                />
              <div id="container-wrap">
                  <div class="hero-gradient1">
                      <div class="hero-fadeout-gradient1">
                        <Navbar/>  
                          <div class="container">
                              <div>                                 
                                  <div class="heading2">                                    
                                      <h1>Admin-Portal</h1>   
                                                  
                                  </div>   
                              </div>
                          </div>     
                      </div>  
                  </div>
                  <div class="container ">
                          <div class="container-fluid center">
                              <div class="login_card">
                                  <div class="login-container  animated flipInX main-heading">
                                      <h2><span class="fa fa-cog"></span> Login</h2>
                                          <form class="margin-t">
                                              <div class="form-group inputContainer">  
                                                  <i class="fa fa-user icon"> </i>                                              
                                                  <input type="text" class="form-control formc" placeholder="Username" onChange={(event) => { setLoginEmail(event.target.value); }} required=""></input>
                                              </div>
                                              <div class="form-group inputContainer">
                                                  <i class="fa fa-lock icon"> </i>
                                                  <input type="password" class="form-control formc" placeholder="Password" onChange={(event) => { setLoginPassword(event.target.value); }} required=""></input>
                                              </div>
                                              <div class="form-group inputContainer">
                                                  <i class="fa fa-shield icon"> </i>
                                                  <input type="password" class="form-control formc" placeholder="Security Pin" onChange={(event) => { setLoginPin(event.target.value); }} required=""></input>
                                              </div>
                                              <div class="text-c">
                                                  <button type="button" class="btn navbar-btn loginp margin-b" onClick={login}><span class="fa fa-sign-in"></span> Log In</button>                                                                                      
                                              </div>                                            
                                          </form>
                                          <div class="text-c">                                                                                                
                                            <Link to="/ahomepage"><button class="btn navbar-btn guestp margin-b"><span class="fa fa-user"></span> Homepage</button></Link> 
                                            <div>
                                                    <Popup trigger={<button class="fpwd"> Forgot password? </button>} 
                                                        position="center center">
                                                        <div class="login_card">
                                                            <div class="login-container animated flipInX main-heading">
                                                                <h3><span class="fa fa-sign-in"></span> Reset Password</h3>
                                                                <form class="margin-t">
                                                                    <div class="form-group inputContainer">  
                                                                        <i class="fa fa-user icon"> </i>                                              
                                                                        <input type="text" class="form-control formc" placeholder="Email" onChange={(event) => { setLoginEmail(event.target.value); }} required></input>
                                                                    </div>
                                                                    <div class="text-c">
                                                                        <button type="button" class="btn navbar-btn loginp margin-b" onClick={forgotPassword}><span class="fa fa-mail-reply"></span> Send Email</button>                                                                                   
                                                                    </div>                                            
                                                                </form>
                                                            </div>                                                            
                                                        </div>
                                                    </Popup>
                                                  </div>    
                                            <Link to="/login"><button class="btn navbar-btn guestp margin-b"><span class="fa fa-arrow-left"></span> Back</button> </Link>                                                                                       
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

export default ALogin;
