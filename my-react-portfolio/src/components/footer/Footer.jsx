import './Footer.css';
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="first__row">
        <picture>
          <img src={Logo} alt="Colling Haws" />
          <p className="footer__description">
            2023 University of Utah Full-Stack Developer Graduate.
          </p>
          <div className="social__icons">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </picture>
      </div>
      <div className="copyright__row">
        <div className="copyright__inner__row">
          <p className="copyright__text">Copyright © 2023 Collin Haws</p>
          <div className="copyright__link">
            <Link to="about" spy={true} smooth={true}>
              About Me
            </Link>
            <Link to="portfolio" spy={true} smooth={true}>
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
