import "./About.css";
import Men from "../../assets/men.jpg";
import { IoArrowForwardOutline } from "react-icons/io5";
import {Link } from "react-scroll";

function About() {
  return (
    <section className="about__container" id="about">
      <picture>
        <img src={Men} alt="" />
      </picture>

      <div className="about__content">
        <h1 className="heading__one">About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          similique, quasi quam minima consequuntur voluptas cumque aspernatur
          quo omnis possimus fugiat nisi, suscipit at! Accusamus quas quo
          molestias nulla fugiat!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          autem exercitationem ducimus commodi sint porro molestiae labore
          maiores error fugiat!
        </p>
        <Link to="portfolio" spy={true} smooth={true}>
          <button>
            <span>Know More</span>
            <IoArrowForwardOutline />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default About;
