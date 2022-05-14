import React, { useState, useEffect } from 'react'
import "../App.css"
import Foot from './footer';
import Navbar from './navbar';
import  {Link } from 'react-router-dom'
import { getDatabase, ref, child,remove,get } from "firebase/database";
import app from '../firebase';


function UserDelete(){
    const [showButton, setShowButton] = useState(false);
    const [email, setEmail] = useState("");
    const [rollNum, setRollNum] = useState("")
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);

    function deleteUser(){
        const dbRef = ref(getDatabase(app));
        get(child(dbRef, `Users/${rollNum}`)).then((snapshot) => {
        if (snapshot.exists()) {

            if (email.localeCompare(snapshot.val()['email']) === 0){
                remove(child(dbRef, `Users/${rollNum}`)).then(window.alert('User Deleted!'))
                .catch((e) => {console.log(e)})
            }
            else{
                window.alert("Wrong Email Id!")
            }
            
            
        } else {
            window.alert("No data available!, Check your Roll Number");
        }
        }).catch((error) => {
        console.error(error);
        });
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
                                        <h2 class="h1-responsive font-weight-bold text-center my-4">Delete User</h2>
                                        <p class="text-center w-responsive mx-auto mb-5">Details of the User to be removed!</p><br></br>
                                        <div class="row" style={{paddingLeft:"40px"}}>
                                            <div class="col-md-11">
                                                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="name" class="">Email ID:</label>
                                                                <input type="text" id="name" name="name" class="form-control" onChange={(event) => { setEmail(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>                                            
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="email" class="">Roll No:</label>
                                                                <input type="text" id="email" name="email" class="form-control" onChange={(event) => { setRollNum(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </form>
                                                <div class="text-center text-md-left" style={{padding:"2rem"}}>
                                                    <button class="btn navbar-btn send margin-b" onClick={deleteUser}><span class="fa fa-edit"></span> Remove User</button><br></br>
                                                    <Link to="/User"><button class="btn navbar-btn guestp1 margin-b"><span class="fa fa-arrow-left"></span> Back</button> </Link>
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

export default UserDelete;

