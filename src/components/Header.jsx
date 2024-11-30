import "./Header.css";
import arrowdown from "../assets/icon-arrow-down.svg";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <h1 className="logo">sunnyside</h1>
        <ul className="menu">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <button className="contact-btn">Contact</button>
      </nav>
      <div className="hero">
        <div>
          <h2>WE ARE CREATIVES</h2>
          <img src={arrowdown} alt="Arrow Down" />
        </div>
      </div>
    </header>
  );
};

export default Header;