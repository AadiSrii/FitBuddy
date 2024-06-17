import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <div className="footer" >
                <div className="footerCol1">
                    <h3>FitBuddy</h3>
                    <div className="footerImg1">
                        <img className="appleApp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Download_on_the_App_Store_Badge_IT_RGB_blk.svg/800px-Download_on_the_App_Store_Badge_IT_RGB_blk.svg.png" alt="" /> 
                    </div>
                    <div className="footerImg2">
                        <img className="playStor" src="https://production-livingdocs-bluewin-ch.imgix.net/2018/5/7/faff5234-f062-4940-8032-ef2ff251c03c.png?w=1024&auto=format" alt="" />
                    </div>

                </div>
                <div className="help">
                    <h6>Help</h6>
                    <Link to="/Login" style={{ textDecoration: "none", color: "black" }}> <div className="pointer">Log In/Register</div></Link>
                    <div className="pointer">Privacy Center</div>
                    <div className="pointer">Support</div>
                    <div className="pointer">Developer / API</div>

                </div>

                <div className="about">
                    <h6>About</h6>
                    <div className="pointer">Contact Us</div>
                    <div className="pointer">Join Our Team</div>
                    <div className="pointer">Shop Under Armour</div>
                </div>

                <div className="connect">
                    <h6 className="pointer">Connect</h6>
                    <div className="pointer">Instagram</div>
                    <div className="pointer">Facebook</div>
                    <div className="pointer">Twitter</div>
                    <div className="pointer">YouTube</div>
                </div>
            </div>

              {/* ******  ****** */}
            <div className="blackfooter">
               <span className="Inc">© 2024 Under Armour®, Inc. All rights reserved</span>
               <span className="privacy"> Privacy Policy</span> 
               <span className="terms">/ Terms of Use</span> 
               <span className="cookie">/ Cookie Policy</span> 
               <span className="pre">Cookie Preferences</span>
               <span className="ad"> / AdChoices</span>  <br/> 
               <br/>
               <span className="do">/ Do Not Sell or Share My Personal Information</span>

            </div>

        </>

    )
}