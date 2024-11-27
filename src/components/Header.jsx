import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <h1 className="logo">sunnyside</h1>
                <ul className="menu">
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
                <button className="contact-btn">Contact</button>
            </nav>
            <div className="hero">
                <h2>WE ARE CREATIVES</h2>
                <img src="/path-to-arrow.svg" alt="Arrow Down" />
            </div>
        </header>
    );
};

export default Header;
