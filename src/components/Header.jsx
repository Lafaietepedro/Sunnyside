import { useState } from "react";
import "./Header.css";
import arrowdown from "../assets/icon-arrow-down.svg";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <nav>
        <h1 className="logo">sunnyside</h1>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
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
        </div>
      </nav>
      <div className="hero">
        <div>
          <h2>WE ARE CREATIVES</h2>
          <img className="slide-in-top" src={arrowdown} alt="Arrow Down" />
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <header className="header">
  <nav>
    <h1 className="logo">sunnyside</h1>
    <div className="hamburger" onClick="toggleMenu()">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <ul className="menu">
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <button className="contact-btn">Contact</button>
      </li>
    </ul>
  </nav>
</header>; */
}
