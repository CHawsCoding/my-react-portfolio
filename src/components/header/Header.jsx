import "./Header.css";
import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

function Header() {
  const [isSticky, setSticky] = useState("normal");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleLinkClick = () => {
    setShowMobileMenu(false);
  };
  

  useEffect(() => {
    window.onscroll = (e) => {
      if (window.scrollY > 50) {
        setSticky("sticky");
      } else {
        setSticky("normal");
      }
    };
  });

  return (
    <header className={isSticky}>
      <nav>
        <picture>
          <img src={Logo} alt="Collin Haws" />
        </picture>
        <menu className={`${showMobileMenu ? "show" : ""}`}>
          <Link to="/about" onClick={handleLinkClick}>About Me</Link>
          <Link to="/portfolio" onClick={handleLinkClick}>Portfolio</Link>
          <Link to="/resume" onClick={handleLinkClick}>Resume</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        </menu>

        {/* Mobile menu icon  */}
        {showMobileMenu ? (
          <RiCloseLine
            className="mobile__menu__icon"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          />
        ) : (
          <RiMenu3Fill
            className="mobile__menu__icon"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;
