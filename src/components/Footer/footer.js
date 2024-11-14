import React from "react";
import "./footer.css";
import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import instagramIcon from "../../assets/instagram.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContent">
                <span className="footerText">Copyright &#169; Ayoub Belhaj. All rights reserved.</span>
                <div className="socialIcons">
                    <a href="https://www.facebook.com" className="socialIcon">
                        <img src={facebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://www.twitter.com" className="socialIcon">
                        <img src={twitterIcon} alt="Twitter" />
                    </a>
                    <a href="https://www.youtube.com" className="socialIcon">
                        <img src={youtubeIcon} alt="YouTube" />
                    </a>
                    <a href="https://www.instagram.com" className="socialIcon">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
