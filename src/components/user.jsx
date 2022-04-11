import React, { useState, useEffect } from 'react'
import "../App.css"
import Foot from './footer';
import Navbar from './navbar';
import  {Link } from 'react-router-dom'
import app from '../firebase';
import { getDatabase, ref, set } from "firebase/database";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth"

function User(){
    const [showButton, setShowButton] = useState(false);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [department, setDepartment] = useState("")
    const [rollNum, setRollNum] = useState("")
    const [year, setYear] = useState(0)

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);

    function addUser(){
        const auth = getAuth(app); 
               
        const db = getDatabase(app);
        set(ref(db, 'Users/' + rollNum), {
            firstName: fname,
            lastName : lname,
            rollNum: rollNum,
            department: department,
            email: email,
            password: password,
            contactNum : contact,
            year: year
        }).then(()=>{
            createUserWithEmailAndPassword(auth,email,password).then((u)=>{
                console.log(u)
            }).catch((error) => {
              window.alert(error);
              }); 
            window.alert("User added!");
        })
        .catch((e)=>console.log(e))
    }

  
    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };
    return (
        <div>
                <div  id="colorlib-page">
                    <div id="container-wrap">
                        <div class="hero-gradient1">
                            <div class="hero-fadeout-gradient1">
                                <Navbar/>  
                                <div class="container">
                                    <div>
                                         
                                        <div class="heading1">
                                        <h1>User</h1>                
                                        </div>   
                                    </div> 
                                </div>     
                            </div>  
                        </div>  
                        <div class="container">
                                <div class="container-fluid">
                                    <div class="contact_card">
                                    <section class="mb-4 main-heading">
                                        <h2 class="h1-responsive font-weight-bold text-center my-4">Add User</h2>
                                        <p class="text-center w-responsive mx-auto mb-5">Details of the user to be added!</p><br></br>
                                        <div class="row" style={{paddingLeft:"40px"}}>
                                            <div class="col-md-11">
                                                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="name" class="">First Name:</label>
                                                                <input type="text" id="name" name="name" class="form-control" onChange={(event) => { setFname(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>                                            
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="email" class="">Last Name:</label>
                                                                <input type="text" id="email" name="email" class="form-control" onChange={(event) => { setLname(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="name" class="">Email:</label>
                                                                <input type="text" id="name" name="name" class="form-control" onChange={(event) => { setEmail(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>                                            
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="email" class="">Contact No:</label>
                                                                <input type="text" id="email" name="email" class="form-control" onChange={(event) => { setContact(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="md-form mb-0">
                                                                <label for="subject" class="">Roll No:</label>
                                                                <input type="text" id="subject" name="subject" class="form-control" onChange={(event) => { setRollNum(event.target.value); setYear(2000+parseInt((event.target.value).substring(9,11))) }} required></input>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="name" class="">Department:</label>
                                                                <input type="text" id="name" name="name" class="form-control" onChange={(event) => { setDepartment(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>                                            
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="email" class="">Password:</label>
                                                                <input type="text" id="email" name="email" class="form-control" onChange={(event) => { setPassword(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div class="text-center text-md-left" style={{padding:"2rem"}}>
                                                    <button class="btn navbar-btn send margin-b" onClick={addUser}><span class="fa fa-save"></span> Save</button><br></br>
                                                    <Link to="/user_modify"><button class="btn navbar-btn guestp margin-b"><span class="fa fa-edit"></span> Modification</button></Link>                                                        
                                                    <Link to="/user_delete"><button class="btn navbar-btn guestp margin-b"><span class="fa fa-step-backward"></span> Deletion</button></Link> <br></br>
                                                    <Link to="/ahomepage"><button class="btn navbar-btn guestp margin-b"><span class="fa fa-arrow-left"></span> Back</button> </Link>
                                                </div>
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
        </div>                
    )
}

export default User;

