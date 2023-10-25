import "./Experience.css";
import React from "react";
import Resume from "../../assets/2023_resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faBootstrap,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

function Experience() {
  // Skill pattern

  return (
    <section className="experience__container" id="resume">
      <h1 className="heading__one">My Experience</h1>

      <div className="proficiencies">
        <h2 className="heading__two">Developer Proficiencies</h2>
        <ul className="proficiencies__list">
          <li className="proficiency__item">
            <FontAwesomeIcon icon={faHtml5} className="proficiency__icon" />
            <span className="proficiency__name">HTML</span>
          </li>
          <li className="proficiency__item">
          <FontAwesomeIcon icon={faCss3} className="proficiency__icon" />
            <span className="proficiency__name">CSS</span>
          </li>
          <li className="proficiency__item">
          <FontAwesomeIcon icon={faBootstrap} className="proficiency__icon" />
          </li>
          <li className="proficiency__item">
            <span className="proficiency__name">Tailwind</span>
          </li>
          <li className="proficiency__item">
          <FontAwesomeIcon icon={faJs} className="proficiency__icon" />
            <span className="proficiency__name">JavaScript</span>
          </li>
          <li className="proficiency__item">
          <FontAwesomeIcon icon={faNodeJs} className="proficiency__icon" />
            <span className="proficiency__name">Node.js</span>
          </li>
          <li className="proficiency__item">
            <span className="proficiency__name">Express.js</span>
          </li>
          <li className="proficiency__item">
            <span className="proficiency__name">MySQL</span>
          </li>
          <li className="proficiency__item">
            <span className="proficiency__name">NoSQL</span>
          </li>
          <li className="proficiency__item">
            <span className="proficiency__name">GraphQL</span>
          </li>
          <li className="proficiency__item">
          <FontAwesomeIcon icon={faReact} className="proficiency__icon" />
            <span className="proficiency__name">React</span>
          </li>
        </ul>
      </div>
      <div>
        <a href={Resume} download className="resume__download__button">
          <button>
            <span>Download Resume</span>
          </button>
        </a>
      </div>
    </section>
  );
}

export default Experience;
