import "../App.css"
import { Link } from "react-router-dom";

function navbar(){
    return(
        <div class="container-gradient">
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
                        <li><Link to="/blog"><b>Blog</b></Link></li>
                        <li><Link to="/support"><b>Support</b></Link></li>
                        <li><Link to="/faq"><b>FAQs</b></Link></li>
                        <li><Link to="/contact"><b>Contact</b></Link></li>
                        <li><Link to="/login" style={{margin:"0px",padding:"0px"}}><button class="btn navbar-btn login"><span class="fa fa-sign-in"></span> Login</button></Link></li>
                      </ul>      
                </div>
            </div>
        </nav>
       </div>  
    )
}
export default navbar;