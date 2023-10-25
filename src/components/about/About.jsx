import React, { useState, useEffect } from "react";
import "./About.css";
import Men from "../../assets/men.jpg";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function About() {
  const fullText = "About Me";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  const fullParagraph =
    "Hello! I'm Collin Haws. I recently completed a Full-stack Development Bootcamp at the University of Utah and am excited to find my next role!  Having spent the last 10 years in roles from technical support to consumer finance, I believe I bring a rich blend of skills and experience to the table. I'm seeking a role in where I can contribute both my professional experience and technical abilities. If you think there may be a good fit in your organization, please hit 'Contact Me' and get in touch! ";

  const fullLastParagraph =
    "For more insight into my experience, click the 'More' button below to get a downloadable copy of my resume. ";

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(displayText + fullText[index]);
        setIndex(index + 1);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [displayText, index]);

  return (
    <section className="about__container" id="about">
      <picture>
        <img src={Men} alt="" />
      </picture>

      <div className="about__content">
        <h1 className="heading__one">{displayText}</h1>
        <p>{fullParagraph}</p>
        <p>{fullLastParagraph}</p>
        <Link to="/experience" className="button-link">
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
