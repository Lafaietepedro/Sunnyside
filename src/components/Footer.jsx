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
                <a href="#"><img src="/path-to-icon.svg" alt="Facebook" /></a>
                <a href="#"><img src="/path-to-icon.svg" alt="Instagram" /></a>
            </div>
        </footer>
    );
};

export default Footer;
