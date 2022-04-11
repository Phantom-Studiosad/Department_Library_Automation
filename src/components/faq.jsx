import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css"
import Foot from './footer';
import Navbar from './navbar';
import Img1 from "../images/faq1.png"
import splash_bg from '../images/Library.gif'


function Faq(){
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
                    <div id="container-wrap">
                        <div class="hero-gradient1">
                            <div class="hero-fadeout-gradient1">
                                <Navbar/>  
                                <div class="container">
                                    <div>
                                        <img class="im1" src={Img1} alt="Vector Image"></img>  
                                        <div class="heading1">
                                        <h1>FAQ's</h1>                
                                        </div>   
                                    </div> 
                                </div>     
                            </div>  
                        </div>  
                        <div class="container">
                                <div class="container-fluid">
                                    <div class="panel-group" id="accordion">
                                        <div class="faqHeader main-heading"><h3>Website</h3></div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">How to Find and Access eBooks?</a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                Navigate to the <b>Top-Center</b> of the page (Navigation Bar) and click on OPAC to Access eBooks.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTen">Why can’t I login to my homepage ?</a>
                                                </h4>
                                            </div>
                                            <div id="collapseTen" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                There can be several reasons to why one can’t login to E-Libray<br/>
                                                1.Check your internet connection.<br/>
                                                2.Check Your User Credentials.<br/>
                                                3.Try clearing your cache and cookies.<br/>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">What to do if I forgot my password?</a>
                                                </h4>
                                            </div>
                                            <div id="collapseEleven" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                Click on <b>“Forgot password?”</b> below login button in login page, You will be prompted to enter your email address
                                                and you will shortly receive a link to reset your password.

                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">I didn’t receive any mail to change my password.</a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                Check spam/junk folder in your mail.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">How do I borrow materials from the Library?</a>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                You can’t borrow any books online but you are free to use eBooks from our website.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">How do I renew my materials?</a>
                                                </h4>
                                            </div>
                                            <div id="collapseFive" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                You can renew Your Books by paying through online portal.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSix">What is the fine for late materials?</a>
                                                </h4>
                                            </div>
                                            <div id="collapseSix" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                It depends upon each books and duration of book being borrowed, We recommend you to refer the link below
                                                and calculate the fine.<br/>
                                                <a href='https://imgur.com/a/xdlucFH' target="_blank">Late Fee Details</a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEight">What does "OPAC" mean?</a>
                                                </h4>
                                            </div>
                                            <div id="collapseEight" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                An online public access catalog, also known as OPAC, is an online database of all the resources and materials held by a particular library or institution.
                                                </div>
                                            </div>
                                        </div>

                                        <div class="faqHeader main-heading"><h3>Miscellaneous</h3></div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">How do I find books?</a>
                                                </h4>
                                            </div>
                                            <div id="collapseFour" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                When you login into E-Library you will be redirected to your profile page , 
                                                Once on your profile You can navigate to search books tab in navigation bar
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">Is the library currently open?</a>
                                                </h4>
                                            </div>
                                            <div id="collapseSeven" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                <b>Library Timings</b><br/>
                                                Working Days : 8.00 AM to 10.00 PM<br/>
                                                Holidays / Vacation : 9.00 AM to 5.00 PM<br/>

                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwelve">What research resources are available?</a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwelve" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                E-library typically provide access to online resources, including research databases and ebook collections, 
                                                in addition to physical books and journals.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThirteen">How many items can I check out at a time?</a>
                                                </h4>
                                            </div>
                                            <div id="collapseThirteen" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                There is not a limit on how many materials/books you can check out at a time, except maybe how many you can carry.<br/>
                                                But Keep in Loan periods vary according to the item and your patron classification
                                                </div>
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

export default Faq;

