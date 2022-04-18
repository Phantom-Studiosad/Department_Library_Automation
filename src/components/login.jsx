import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css"
import  { Redirect, Link } from 'react-router-dom'
import Foot from './footer';
import Navbar from './navbar';
import Img1 from "../images/login.png"
import splash_bg from '../images/Library.gif'
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


function Login(){
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [redirect1, setRedirect1] = useState(false);
    const auth = getAuth(app);

    const login = async () => {
        try {
            if(loginEmail.includes("cb.students.amrita.edu") || loginEmail.includes("com")){
                await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((u)=>{
                    setRedirect(true);
                    console.log(u)
                }).catch((error) => {
                  window.alert(error);
                  });          
            } else if(loginEmail.includes("cb.research.amrita.edu") || loginEmail.includes("com")){
                await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((u)=>{
                    setRedirect1(true);
                    console.log(u)
                }).catch((error) => {
                  window.alert(error);
                  });
            } else window.alert("Wrong username");
        } catch (error) {
          window.alert(error);
        }
      };
      const logout = async () => {
        await signOut(auth);
      };
    
    const forgotPassword = async () => {
        try{
            if(loginEmail.includes("cb.students.amrita.edu") || loginEmail.includes("com")){
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
        }, 2500)
    }, [])
  
    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };
    if(redirect){
        return <Redirect to = {`/homepage/${loginEmail}`}></Redirect>
    } else if(redirect1){
        return <Redirect to = {`/rhomepage/${loginEmail}`}></Redirect>
    }
    else{
        return (
            <div>
              {
                loading?
                <div class="cus2">
                    <img src={splash_bg} class="splash_logo1" alt="E-Library"></img>
                    <div class="cus1">
                    <PuffLoader
                    color={"#db2cc0"} 
                    loading={loading} 
                    size={50} />
                    </div>
                </div>
                :
                <div  id="colorlib-page">
                    {/*<StarfieldAnimation
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%'
                      }}
                    />*/}
                  <div id="container-wrap">
                      <div class="hero-gradient1">
                          <div class="hero-fadeout-gradient1">
                              <Navbar/>  
                              <div class="container">
                                  <div class="column1">                                 
                                      <div class="heading2">                                    
                                          <h1>Login</h1>   
                                          <img class="im2" src={Img1} alt="Vector Image"></img>               
                                      </div>   
                                  </div> 
                                  <div class="column1">  
                                  <div class="container-fluid log">
                                  <div class="login_card">
                                      <div class="login-container animated flipInX main-heading">
                                          <h2><span class="fa fa-users"></span> Login</h2>
                                              <form class="margin-t">
                                                  <div class="form-group inputContainer">  
                                                      <i class="fa fa-user icon"> </i>                                              
                                                      <input type="text" class="form-control formc" placeholder="Username" onChange={(event) => { setLoginEmail(event.target.value); }} required></input>
                                                  </div>
                                                  <div class="form-group inputContainer">
                                                      <i class="fa fa-lock icon"> </i>
                                                      <input type="password" id="myInput" class="form-control formc" placeholder="Password" onChange={(event) => { setLoginPassword(event.target.value); }} required></input>
                                                  </div>
                                                  <div class="text-c">
                                                      <button type="button" class="btn navbar-btn loginp margin-b" onClick={login}><span class="fa fa-sign-in"></span> Log In</button>                                                                                   
                                                  </div>                                            
                                              </form>
                                              <div class="text-c">
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
                                                      <Link to="/alogin"><button class="btn navbar-btn guestp margin-b"><span class="fa fa-cog"></span> Admin</button> </Link>
                                                      <Link to="/ghomepage"><button class="btn navbar-btn guestp margin-b"><span class="fa fa-user"></span> Guest</button></Link>                                                                                     
                                              </div> 
                                      </div>  
                                  </div>                                                    
                              </div>                                 
                                  </div>
                              </div>     
                          </div>  
                      </div>
                      <div class="container log1">
                              <div class="container-fluid center">
                                  <div class="login_card">
                                      <div class="login-container  animated flipInX main-heading">
                                          <h2><span class="fa fa-users"></span> Login</h2>
                                              <form class="margin-t">
                                                  <div class="form-group inputContainer">  
                                                      <i class="fa fa-user icon"> </i>                                              
                                                      <input type="text" class="form-control formc" placeholder="Username" onChange={(event) => { setLoginEmail(event.target.value); }} required=""></input>
                                                  </div>
                                                  <div class="form-group inputContainer">
                                                      <i class="fa fa-lock icon"> </i>
                                                      <input type="password" class="form-control formc" placeholder="Password" onChange={(event) => { setLoginPassword(event.target.value); }} required=""></input>
                                                  </div>
                                                  <div class="text-c">
                                                      <button type="button" class="btn navbar-btn loginp margin-b" onClick={login}><span class="fa fa-sign-in"></span> Log In</button>                                      
                                                  </div>                                            
                                              </form>
                                              <div class="text-c">
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
                                                      <Link to="/alogin"><button class="btn navbar-btn guestp margin-b"><span class="fa fa-cog"></span> Admin</button> </Link>
                                                      <Link to="/homepage"><button class="btn navbar-btn guestp margin-b"><span class="fa fa-user"></span> Guest</button></Link>                                                                                     
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
}

export default Login;
