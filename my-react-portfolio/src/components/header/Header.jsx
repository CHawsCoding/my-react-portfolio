import "./Header.css";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

function Header() {
  const [isSticky, setSticky] = useState("normal");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
          <Link to="about" spy={true} smooth={true} offset={-150}>
            About Me
          </Link>
          <Link to="portfolio" spy={true} smooth={true} offset={-150}>
            Portfolio
          </Link>
          <Link to="resume" spy={true} smooth={true} offset={-150}>
            Resume
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-150}>
            Contact
          </Link>
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
