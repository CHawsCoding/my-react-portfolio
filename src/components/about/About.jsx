import "./About.css";
import React from 'react';
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
          My name is Collin Haws. I am a recent graduate of a Full-stack development
          bootcamp through the University of Utah. I have years of professional experience in technical support,
          finance, underwriting and more. I am hoping to leverage my career experience and new technical skills 
          into a new opportunity in tech. 
        </p>
        <p>
          Click "Resume" at the top of the page to get a copy of my downloadable resume
          and Contact me if there is a good fit! You can also view my portfolio of projects 
          by also clicking the link in the header
        </p>
        <Link to="portfolio" spy={true} smooth={true}>
          <button>
            <span>More</span>
            <IoArrowForwardOutline />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default About;
