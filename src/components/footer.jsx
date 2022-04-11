import React, { Component } from 'react'
import "../App.css"
import Img1 from "../images/twitter.png"
import Img2 from "../images/reddit.png"
import Img3 from "../images/medium.png"
import Img4 from "../images/discord.png"
import Img5 from "../images/instagram.png"

export default class Foot extends Component {
  render() {
    return (
        <div class="footer-gradient">
            <div class="container-fluid center">
                <div class="container center1">
                    <div class="footer row2">
                        <div class="social_column twit">
                            <div class="social_card" onClick={()=> window.open("https://twitter.com/search?q=e%20library&src=typed_query", "_blank")}>
                                <img class="social_card_img" src={Img1} alt="Vector Image"></img>                                                        
                            </div>
                        </div>   
                        <div class="social_column redd">
                            <div class="social_card" onClick={()=> window.open("https://www.reddit.com/search/?q=e%20library", "_blank")}>
                                <img class="social_card_img" src={Img2} alt="Vector Image"></img>                           
                            </div>
                        </div> 
                        <div class="social_column medi">
                            <div class="social_card" onClick={()=> window.open("https://medium.com/search?q=e%20library", "_blank")}>
                            <img class="social_card_img" src={Img3} alt="Vector Image"></img>                          
                            </div>
                        </div>    
                        <div class="social_column disc">
                            <div class="social_card" onClick={()=> window.open("https://discord.com/guild-discovery?query=library&offset=0&limit=12&preferredLocale=en-US&categoryId=-1&tag=", "_blank")}>
                            <img class="social_card_img" src={Img4} alt="Vector Image"></img>                            
                            </div>
                        </div>   
                        <div class="social_column inst">
                            <div class="social_card" onClick={()=> window.open("https://www.instagram.com/explore/tags/elibrary/", "_blank")}>
                            <img class="social_card_img" src={Img5} alt="Vector Image"></img>                            
                            </div>
                        </div>                                  
                    </div>
                    <p style={{textAlign:"center", fontWeight:"bold"}}>© 2022 E-Library. All rights reserved</p>                    
                </div>                
            </div>    
        </div>
    )
  }
}