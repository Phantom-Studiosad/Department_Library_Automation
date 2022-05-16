import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import "../App.css"
import Img1 from "../images/img1.jpg"
import Img2 from "../images/book.png"
import Img3 from "../images/fine.gif"
import Img4 from "../images/ebook.gif"
import Img5 from "../images/book_data.png"
import Img6 from "../images/notification.png"

export default class Bod extends Component {
  render() {
    return (
        <div class="container-fluid">
            <div class="container">
                <div class="main-heading">
                    <h1>E-Library Management System</h1>
                    <p class="subhead">Analytics driven personalized learning experience.</p>
                </div>   
                <div class="row3">
                    <div class="column">
                        <div class="card1">
                            <Link to="/opac">
                                <div class="im"><img class="card_img" src={Img1} alt="Vector Image"></img> </div>                              
                                <h2>Search Books</h2>
                            </Link>
                            
                        </div>
                    </div>   
                    <div class="column">
                        <div class="card2">
                            <Link to='/alogin'>
                            <img class="card_img" src={Img2} alt="Vector Image"></img>
                            <h2>Borrow/Return</h2>
                            </Link>                            
                        </div>
                    </div> 
                    <div class="column">
                        <div class="fine_card">
                            <Link to="/login">
                                <img class="card_img" src={Img3} alt="Vector Image"></img>
                                <h2>Fine Payment</h2>
                            </Link>                           
                        </div>
                    </div>                                   
                </div>
                <div class="row tim">
                    <div class="col">
                        <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                            <div class="timeline-step">
                                <div class="timeline-content">
                                    <div class="inner-circle"></div>
                                </div>
                            </div>
                            <div class="timeline-step">
                                <div class="timeline-content">
                                    <div class="inner-circle"></div>
                                </div>
                            </div>
                            <div class="timeline-step">
                                <div class="timeline-content">
                                    <div class="inner-circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row3">
                    <div class="column">
                        <div class="e-book_card">
                            <Link to="/opac">
                                <img class="card_img" src={Img4} alt="Vector Image"></img>
                                <h2>E-book's</h2>
                            </Link>                            
                        </div>
                    </div> 
                    <div class="column">
                        <div class="card2">
                            <Link to="/alogin">
                                <img class="card_img" src={Img5} alt="Vector Image"></img>
                                <h2>Book Data</h2>
                            </Link>                            
                        </div>
                    </div> 
                    <div class="column">
                        <div class="card1">
                            <Link to="/login">
                                <img class="card_img" src={Img6} alt="Vector Image"></img>
                                <h2>Notification</h2>
                            </Link>
                        </div>
                    </div>   
                </div>
            </div>        
        </div>    
    )
  }
}

