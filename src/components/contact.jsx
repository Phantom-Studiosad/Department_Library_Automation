import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css";
import Foot from './footer';
import Navbar from './navbar';
import Img1 from "../images/contact.gif"
import splash_bg from '../images/Library.gif'
import app from '../firebase';
import { getDatabase, ref, set } from "firebase/database";



function Contact(){
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Subject, setSubject] = useState("");
    const [Message, setMessage] = useState("");
    const [showButton, setShowButton] = useState(false);
    const [x, setx] = useState("");

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

    
    function submit(){                   
        const db = getDatabase(app); 
        set(ref(db, x + "/"+ (Email.replaceAll(".","")).substring(0,14)), {
            email: Email,
            name: Name,
            subject: Subject,
            Message: Message           
        }).then((u) => {console.log(u);window.alert('DB Added Successfully')})
        .catch((e)=>console.log(e))
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
                                    <div>
                                        <img class="im1" src={Img1} alt="Vector Image"></img>  
                                        <div class="heading1">
                                        <h1>Contact Us</h1>                
                                        </div>   
                                    </div> 
                                </div>     
                            </div>  
                        </div>  
                        <div class="container">
                                <div class="container-fluid">
                                    <div class="contact_card">
                                    <section class="mb-4 main-heading">
                                        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                                        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                                        a matter of hours to help you.</p>
                                        <div class="row">
                                            <div class="col-md-9 mb-md-0 mb-5">
                                                <form id="contact-form" name="contact-form" action="https://formsubmit.co/4b28c580e3b4ccc40792cf62b078c668" method="POST">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="name" class="">Your name</label>
                                                                <input type="text" id="name" name="name" class="form-control" onChange={(event) => { setName(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>                                            
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="email" class="">Your email</label>
                                                                <input type="text" id="email" name="email" class="form-control" onChange={(event) => { setEmail(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="md-form mb-0">
                                                                <label for="subject" class="">Subject</label>
                                                                <input type="text" id="subject" name="subject" class="form-control" onChange={(event) => { setSubject(event.target.value); }}></input>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="md-form">
                                                                <label for="message">Your message</label>
                                                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" onChange={(event) => { setMessage(event.target.value); }} required></textarea>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <input type="hidden" name="_next" value="https://www.e-libraryse.ml/contact"></input>
                                                    <div class="text-center text-md-left" style={{padding:"2rem"}}>
                                                        <button type='submit' class="btn navbar-btn send margin-b" onClick={submit}><span class="fa fa-share-square"></span> Send</button>
                                                    </div>
                                                    
                                                </form>                                                
                                            </div> 
                                            <div class="col-md-3 text-center">
                                                <ul class="list-unstyled mb-0">
                                                    <li>
                                                        <input type="radio" id="developer" name="contact_to" value="HTML" onClick={() => {setx("Developer");}}></input>
                                                        <label for="html">Developer</label><br></br>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="librarian" name="contact_to" value="HTML" onClick={() => {setx("Librarian");}}></input>
                                                        <label for="html">Librarian</label><br></br>
                                                    </li>
                                                    <li><i class="fa fa-map-marker-alt fa-2x"></i>
                                                        <p>XYZ, Tamil Nadu, India</p>
                                                    </li>

                                                    <li><a class="c_iconn" onClick={()=> window.open("tel:"+'+91 12345 67890')}><i class="fa fa-phone-square mt-4 fa-2x"></i></a>
                                                        <p class="c_icon"><a onClick={()=> window.open("tel:"+'+91 12345 67890')}> +91 12345 67890</a></p>
                                                    </li>

                                                    <li><a class="c_iconn" onClick={()=> window.open("mailto:"+'contact@e_library.com')}><i class="fa fa-envelope mt-4 fa-2x"></i></a>
                                                        <p class="c_icon"><a onClick={()=> window.open("mailto:"+'contact@e_library.com')}> contact@e_library.com</a></p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
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

export default Contact;

