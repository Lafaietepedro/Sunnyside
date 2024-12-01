import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h1 className="logo">sunnyside</h1>
            <ul className="footer-menu">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
            <div className="social-icons">
                <a href="#"><img src={facebook} alt="Facebook" /></a>
                <a href="#"><img src={instagram} alt="Instagram" /></a>
                <a href="#"><img src={twitter} alt="Instagram" /></a>
                <a href="#"><img src={pinterest} alt="Instagram" /></a>
            </div>
        </footer>
    );
};

export default Footer;
