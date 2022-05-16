import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../App.css"
import Foot from './footer';
import { Link } from "react-router-dom";
import splash_bg from '../images/Library.gif'
import avatar from '../images/avatar.png'
import app from '../firebase';
import { getDatabase, ref, child, get, set } from "firebase/database";
import {
    getAuth,
} from "firebase/auth"

function RProfilepage(){
    const [showButton, setShowButton] = useState(false);
    const auth = getAuth(app);
    const [userEmail, setuserEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [department, setDepartment] = useState("");
    const [mobile, setMobile] = useState("");
    const [active,setActive] = useState(true);

    const  constructor = () =>{
        const user = auth.currentUser;
        const roll = userEmail.substring(8,16);
        if (user !== null) {
            setuserEmail(user.email);
            const dbRef = ref(getDatabase(app));
            get(child(dbRef, `Research/${roll}`)).then((snapshot) => {
            if (snapshot.exists()) {
                setFname(snapshot.val().firstName.toUpperCase());
                setLname(snapshot.val().lastName.toUpperCase());
                setDepartment(snapshot.val().department.toUpperCase());
                setMobile(snapshot.val().contactNum.toUpperCase());
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
        };
    };

    function mod(){
        const roll = userEmail.substring(8,16);
        const dbRef = ref(getDatabase(app));
        get(child(dbRef, `Users/${roll}`)).then((snapshot) => {
        if (snapshot.exists()) {
            
            const db = getDatabase(app);
            set(ref(db, 'Users/' + roll), {
                firstName: fname,
                lastName : lname,
                rollNum: snapshot.val()['rollNum'],
                department: snapshot.val()['department'],
                email: userEmail,
                password: snapshot.val()['password'],
                contactNum : mobile,
                year: snapshot.val()['year']
        }).then(window.alert("User Details Updated!"))
        .catch((e)=>console.log(e))
            
        } else {
            window.alert("No data available!, Check your Roll Number");
        }
        }).catch((error) => {
        console.error(error);
        }); 
    }


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
              <img src={splash_bg} class="splash_logo1" alt="logo"></img>  
              <div class="cus1">
                <PuffLoader
                color={"#db2cc0"} 
                oading={loading} 
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
                                                <li><Link to="/rprofilepage"><b><span class="fa fa-user" title='Profile'></span></b></Link></li>
                                                <Link to={`/rhomepage/${userEmail}`}><button class="btn navbar-btn guestp1 margin-b"><span class="fa fa-arrow-left"></span> Back</button></Link>
                                            </ul>      
                                        </div>
                                    </div>
                                </nav>
                            </div>    
                      </div>  
                    </div>
                    <div class="container profilecont">
                        <div class="row glutters-sm">
                            <div class="col-md-4 mb-3"> 
                                    <div class="w3-card w3-round homepage_bg" style={{textAlign:"center"}}>
                                                <div class="w3-container">
                                                    <h4 class="w3-center">My Profile</h4>
                                                    <p class="w3-center"><img src={avatar} class="w3-circle" alt="Avatar" style={{height:"106px",width:"106px"}}></img></p>
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
                                            <h4 class="w3-center">Contact Details</h4>
                                            <hr></hr>
                                            <div class="hp_profile">
                                                <p><a class="c_iconn" style={{fontSize:'12px'}} onClick={()=> window.open("tel:"+'+91 12345 67890')}><i class="fa fa-phone-square mt-4 fa-2x"> +91 {mobile}</i></a></p><br></br>
                                                <p><a class="c_iconn" style={{fontSize:'14px'}} onClick={()=> window.open("mailto:"+'contact@e_library.com')}><i class="fa fa-envelope mt-4 fa-2x"></i> {userEmail}</a></p><br></br>                                                 
                                            </div>                                                    
                                        </div>
                                    </div> 
                            </div>

                            <div class="col-md-8">
                                
                                {active ? 
                                    <div class="profile_card mb-3">
                                        <div class="profile_card-body">
                                        <div class="row">
                                            <div class="col-sm-3">
                                            <h4 class="mb-0">First Name</h4>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {fname}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div class="row">
                                            <div class="col-sm-3">
                                            <h4 class="mb-0">Last Name</h4>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {lname}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div class="row">
                                            <div class="col-sm-3">
                                            <h4 class="mb-0">Email</h4>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {userEmail}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div class="row">
                                            <div class="col-sm-3">
                                            <h4 class="mb-0">Phone</h4>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            +91 {mobile}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div class="row">
                                            <div class="col-sm-12">
                                            <button type="button" class="btn navbar-btn loginp1 margin-b" onClick={(event) => { setActive(false); }}><span class="fa fa-edit"></span> Edit</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                :
                                <div class="profile_card mb-3 edt">
                                    <div class="profile_card-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                        <h4 class="mb-0">First Name</h4>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                        <input type="text" id="fnam" name="fnam" class="form-control" placeholder={fname} onChange={(event) => { setFname(event.target.value); }}></input>                                    
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row">
                                        <div class="col-sm-3">
                                        <h4 class="mb-0">Last Name</h4>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                        <input type="text" id="lnam" name="lnam" class="form-control" placeholder={lname} onChange={(event) => { setLname(event.target.value); }}></input>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row">
                                        <div class="col-sm-3">
                                        <h4 class="mb-0">Phone</h4>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                        <input type="text" id="fnam" name="fnam" class="form-control" placeholder={mobile} onChange={(event) => { setMobile(event.target.value); }}></input>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row">
                                        <div class="col-sm-12">
                                        <button type="button" class="btn navbar-btn loginp1 margin-b" onClick={(event) => { setActive(true); mod(); }}><span class="fa fa-save"></span> Save</button>
                                        <button type="button" class="btn navbar-btn guestp margin-b" onClick={(event) => { setActive(true); }}><span class="fa fa-save"></span> Cancel</button>
                                        </div>
                                    </div>
                                    </div>
                                </div> 
                                }
                            

                                

                                <div class="row gutters-sm">
                                    <div class="col-sm-6 mb-3">
                                        <div class="profile_card h-100">
                                            <div class="profile_card-body">
                                                <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 mb-3">
                                        <div class="profile_card h-100">
                                            <div class="profile_card-body">
                                                <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                                
                            </div> 
                    </div> 
                    <div class="text-center text-md-left" style={{padding:"0rem"}}>
                        <Link to={`/rhomepage/${userEmail}`}><button class="btn navbar-btn guestp1 margin-b"><span class="fa fa-arrow-left"></span> Back</button></Link>
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

export default RProfilepage;

