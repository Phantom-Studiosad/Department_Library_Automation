import React, { useState, useEffect } from 'react'
import "../App.css"
import Foot from './footer';
import Navbar from './navbar';
import  { Link } from 'react-router-dom'
import app from '../firebase';
import { getDatabase, ref, set } from "firebase/database";
import {
    getAuth
} from "firebase/auth"



function Book(){
    const [showButton, setShowButton] = useState(false);
    const [bookId, setBookId] = useState("")
    const [bookName, setBookName] = useState("")
    const [author, setAuthor] = useState("")
    const [publication, setPublication] = useState("")
    const [isbn, setIsbn] = useState("")
    const [numCopies, setNumCopies] = useState(0)
    const [genre, setgenre] = useState("")
    const [location, setlocation] = useState("")
    const [userEmail, setuserEmail] = useState("");
    const auth = getAuth(app);
    

    const  constructor = () =>{
        const user = auth.currentUser;
        setuserEmail(user.email);
    };

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);

    function addBook(){
        
        const db = getDatabase(app);
        set(ref(db, 'Books/' + bookId), {
            bookId : bookId,
            bookName : bookName,
            author : author,
            publication: publication,
            isbn: isbn,
            numCopies: numCopies,
            genre: genre,
            location: location
        }).then(window.alert("Book added!"))
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
                <div  id="colorlib-page" onLoad={constructor}>
                    <div id="container-wrap">
                        <div class="hero-gradient1">
                            <div class="hero-fadeout-gradient1">
                                <Navbar/>  
                                <div class="container">
                                    <div>
                                         
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
                                        <h2 class="h1-responsive font-weight-bold text-center my-4">Add Book</h2>
                                        <p class="text-center w-responsive mx-auto mb-5">Details of the book to be added!</p><br></br>
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
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="name" class="">Book ISBN:</label>
                                                                <input type="text" id="name" name="name" class="form-control" onChange={(event) => { setIsbn(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>                                            
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="email" class="">Number of Copies:</label>
                                                                <input type="text" id="email" name="email" class="form-control" onChange={(event) => { setNumCopies(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="name" class="">Genre:</label>
                                                                <input type="text" id="name" name="name" class="form-control" onChange={(event) => { setgenre(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>                                            
                                                        <div class="col-md-6">
                                                            <div class="md-form mb-0">
                                                                <label for="email" class="">Location:</label>
                                                                <input type="text" id="email" name="email" class="form-control" onChange={(event) => { setlocation(event.target.value); }} required></input>                                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div class="text-center text-md-left" style={{padding:"2rem"}}>
                                                    <button class="btn navbar-btn send margin-b" onClick={addBook}><span class="fa fa-save"></span> Save</button><br></br>
                                                    <Link to="/book_modify"><button class="btn navbar-btn guestp1 margin-b"><span class="fa fa-edit"></span> Modification</button></Link>                                                        
                                                    <Link to="/book_delete"><button class="btn navbar-btn guestp2 margin-b"><span class="fa fa-step-backward"></span> Deletion</button></Link> <br></br>
                                                    <Link to={`/ahomepage/${userEmail}`}><button class="btn navbar-btn guestp margin-b"><span class="fa fa-arrow-left"></span> Back</button> </Link>
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

export default Book;

