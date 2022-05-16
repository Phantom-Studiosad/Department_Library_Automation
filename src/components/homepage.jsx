import React, { useState, useEffect, useCallback } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css"
import Foot from './footer';
import { Link } from "react-router-dom";
import splash_bg from '../images/Library.gif'
import Avatar from "../images/avatar.png"
import Popup from 'reactjs-popup';
import app from '../firebase';
import { getDatabase, ref, child, get, set } from "firebase/database";
import {
    getAuth,
    signOut,
} from "firebase/auth"


function Homepage(){
    const auth = getAuth(app);
    const [showButton, setShowButton] = useState(false);
    const [userEmail, setuserEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [department, setDepartment] = useState("");
    const [blog ,setBlog] = useState("");
    const [roll, setRoll] = useState("");
    const [bstate, setBstate] = useState({});
    const [bookNames, setBookNames] = useState(['']);

    const makePayment = async () => {
        console.log("here...");
        const res = await initializeRazorpay();
    
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
    
        // Make API call to the serverless API
        const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
        t.json()
        );
        console.log(data);
        var options = {
          key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
          name: "E-Library Automation",
          currency: data.currency,
          amount: data.amount,
          order_id: data.id,
          description: "Fine Payment",
          image: "https://raw.githubusercontent.com/dharun-narayanan/Department_Library_Automation/master/src/images/Library.gif",
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
          },
          prefill: {
            name: "E-Library",
            email: "elibraryautomation@gmail.com",
            contact: "9597342348",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
      const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          // document.body.appendChild(script);
    
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
    
          document.body.appendChild(script);
        });
      };

   const  constructor = () =>{
        const user = auth.currentUser;
        setRoll(userEmail.substring(8,16));
        if (user !== null) {
            setuserEmail(user.email);
            const dbRef = ref(getDatabase(app));
            get(child(dbRef, `Users/${roll}`)).then((snapshot) => {
            if (snapshot.exists()) {
                setFname(snapshot.val().firstName.toUpperCase());
                setLname(snapshot.val().lastName.toUpperCase());
                setDepartment(snapshot.val().department.toUpperCase());
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
            //Borrow Details
            get(child(dbRef, `Borrow/${roll}`)).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach((childSnapshot) => {
                    setBookNames(bookNames.concat(childSnapshot.val().bookName));
                });
            } else {
                console.log("No borrow data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        };
        console.log(bookNames);
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
        window.alert("User logged out successfully!")
      };
    
      function bpost(){
        const db = getDatabase(app);
        set(ref(db, 'Blog/' + roll),{
            user : roll,
            content: blog,
        }).then(window.alert('Blog Posted!')).catch((e) => {console.log(e)});
    }
    function bcontent(){
        const dbRef = ref(getDatabase(app));
        
        get(child(dbRef, "Blog")).then((snapshot) => setBstate(snapshot.val()))
        .catch((error) => {console.log(error)});
        return Object.keys(bstate).map((key) => {
                return(
                    <div class="w3-container w3-card homepage_bg w3-round w3-margin"><br></br>
                    <span class="w3-right w3-opacity">16 min</span>
                    <h4>{bstate[key].user}</h4><br></br>
                    <hr class="w3-clear"></hr>
                    <p> {bstate[key].content}</p>
                    <button class="btn navbar-btn loginp margin-b" ><i class="fa fa-thumbs-up"></i>  Like</button>
                    <button class="btn navbar-btn guestp     margin-b" ><i class="fa fa-comment"></i>  Comment</button> 
                    </div> 
                )
            })
        
        /*return Object.keys(this.state.qdata).map((obj) => {
            
                return (
                    <div style={{color:"red",marginLeft:"18%"}}>
                    <table>
                        <tr>
                            <td>{this.state.qdata[obj].Room_no} </td>
                            <td>{this.state.qdata[obj].Exam_id}</td>
                            <td>{this.state.qdata[obj].Course_id}</td>
                            <td>{this.state.qdata[obj].Ss_id} - 
                            {this.state.qdata[obj].Es_id}</td>
                            <td>{this.state.qdata[obj].Date}</td>
                            <td>{this.state.qdata[obj].time}</td>
                            <td>{this.state.qdata[obj].duration}</td>
                        </tr>
                    </table>  
                    </div>
                )       
        })*/
    }
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
                                                <li><Link><b><span class="fa fa-bell" title='Notifications'></span></b></Link></li>
                                                <li><Link to="/profilepage"><b><span class="fa fa-user" title='Profile'></span></b></Link></li>
                                                <li><Link to="/login" style={{margin:"0px",padding:"0px"}}><button class="btn navbar-btn login" onClick={logout}><span class="fa fa-sign-out"></span> LogOut</button></Link></li>
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
                                                        <p><i class="fa fa-credit-card" style={{marginRight:"15px"}}></i>{userEmail.substring(0,16).toUpperCase()}</p>
                                                        <p><i class="fa fa-book" style={{marginRight:"15px"}}></i>B.Tech {department}</p>                                                       
                                                    </div>                                                    
                                                </div>
                                            </div>
                                            <br></br>

                                            <div class="w3-card w3-round homepage_bg" style={{textAlign:"center"}}>
                                                <div class="w3-container">
                                                    <h4 class="w3-center">Borrowed Books</h4>
                                                    <hr></hr>
                                                    <div class="hp_profile">
                                                        <p><i class="fa fa-book" style={{marginRight:"15px"}}></i>{bookNames[1]}</p>     
                                                        <p><i class="fa fa-book" style={{marginRight:"15px"}}></i>{bookNames[2]}</p>     
                                                        <p><i class="fa fa-book" style={{marginRight:"15px"}}></i>{bookNames[3]}</p>                                                       
                                                    </div>                                                    
                                                </div>
                                            </div>                                                    
                                            <br></br>

                                            <div class="w3-card w3-round homepage_bg w3-hide-small">
                                                <div class="w3-container">
                                                    <p>Interests</p>
                                                    <p>
                                                        <span class="w3-tag w3-small w3-theme-d5">Classics</span>                                                        
                                                        <span class="w3-tag w3-small w3-theme-d3">Fantasy</span>
                                                        <span class="w3-tag w3-small w3-theme-d2">Horror</span>
                                                        <span class="w3-tag w3-small w3-theme-d1">Romance</span>
                                                        <span class="w3-tag w3-small w3-theme">Sci-Fi</span>
                                                        <span class="w3-tag w3-small w3-theme-l1">Suspense</span>
                                                        <span class="w3-tag w3-small w3-theme-l2">Thrillers</span>
                                                        <span class="w3-tag w3-small w3-theme-d4">Comic Book or Graphic Novel</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="w3-col m6">
                                            <div class="w3-row-padding">
                                                <div class="w3-col m12">
                                                <div class="w3-card w3-round homepage_bg">
                                                    <div class="w3-container w3-padding">
                                                    <h6 class="w3-opacity">Blog post</h6>
                                                    <p contenteditable="true" class="w3-border w3-padding"><input type="text" onChange={(event) => { setBlog(event.target.value); }} placeholder="Status: Feeling Blue" style={{backgroundColor:"#121b23", width:"45rem",border:"0px"}}></input></p>
                                                    <button class="btn navbar-btn loginp margin-b" onClick = {bpost}><i class="fa fa-pencil"></i>  Post</button> 
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            {
                                                bcontent()
                                            }    
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
                                            <p>Pending Fines</p>
                                            <hr></hr>   
                                            <div class="hp_profile">
                                                <p>Amount: ₹0</p>  
                                                <Popup trigger={<button class="btn navbar-btn guestp1 margin-b"><span class="fa fa-rupee"></span> Pay Fine</button>} 
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
                                                                            <button type="button" class="btn navbar-btn loginp1 margin-b" onClick={makePayment}>Proceed To Pay</button>                                                                               
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
                                                <Link to="/contact"><p><i class="fa fa-bug w3-xxlarge"></i></p></Link>
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

export default Homepage;

