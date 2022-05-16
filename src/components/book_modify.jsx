import React, { useState, useEffect } from 'react'
import "../App.css"
import Foot from './footer';
import Navbar from './navbar';
import  { Link } from 'react-router-dom'
import app from '../firebase';
import { getDatabase, ref, child, get,set } from "firebase/database";
import Img1 from "../images/books.png"


function BookModify(){
    const [showButton, setShowButton] = useState(false);
    const [bookId, setBookId] = useState("")
    const [bookName, setBookName] = useState("")
    const [author, setAuthor] = useState("")
    const [publication, setPublication] = useState("")
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
    
    function modifyBook(){
        
        const dbRef = ref(getDatabase(app));
        get(child(dbRef, `Books/${bookId}`)).then((snapshot) => {
        if (snapshot.exists()) {
            
            const db = getDatabase(app);
            set(ref(db, 'Books/' + bookId), {
            bookId : bookId,
            bookName : bookName,
            author : author,
            publication: publication,
            isbn: snapshot.val()['isbn'],
            numCopies: snapshot.val()['numCopies']
        }).then(window.alert("Book Modified!"))
        .catch((e)=>console.log(e))        
            
        } else {
            window.alert("No data available!, Check your Book-Id");
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
                                        <img class="im1" src={Img1} alt="Vector Image"></img>                                           
                                        <div class="heading1">
                                        <h1>Book</h1>                
                                        </div>   
                                    </div> 
                                </div>     
                            </div>  
                        </div>  
                        <div class="container">
                                <div class="container-fluid">
                                    <div class="contact_card">
                                    <section class="mb-4 main-heading">
                                    <h2 class="h1-responsive font-weight-bold text-center my-4">Modify Book</h2>
                                        <p class="text-center w-responsive mx-auto mb-5">Details of the book to be modified!</p><br></br>
                                        <div class="row" style={{paddingLeft:"40px"}}>
                                            <div class="col-md-11">
                                                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="name" class="">Book ID:</label>
                                                                <input type="text" id="name" name="name" class="form-control" onChange={(event) => { setBookId(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>                                            
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="email" class="">Publication:</label>
                                                                <input type="text" id="email" name="email" class="form-control" onChange={(event) => { setPublication(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="name" class="">Book Name:</label>
                                                                <input type="text" id="name" name="name" class="form-control" onChange={(event) => { setBookName(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>                                            
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="email" class="">Book Author:</label>
                                                                <input type="text" id="email" name="email" class="form-control" onChange={(event) => { setAuthor(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </form>
                                                <div class="text-center text-md-left" style={{padding:"2rem"}}>
                                                    <button class="btn navbar-btn send margin-b" onClick={modifyBook}><span class="fa fa-save"></span> Modify</button><br></br>
                                                    <Link to="/book"><button class="btn navbar-btn guestp1 margin-b"><span class="fa fa-arrow-left"></span> Back</button> </Link>
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

export default BookModify;