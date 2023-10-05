import "./Experience.css";
import React from 'react';
import Resume from "../../assets/resume.pdf";

function Experience() {
  // Skill pattern

  return (
    <section className="experience__container" id="resume">
      <h1 className="heading__one">My Experience</h1>

      <div className="proficiencies">
        <h2 className="heading__two">Developer Proficiencies</h2>
        <ul className="proficiencies__list">
          <li className="proficiency__item">
            <span className="proficiency__name">HTML</span>
          </li>
          <li className="proficiency__item">
            <span className="proficiency__name">CSS</span>
          </li>
          <li className="proficiency__item">
            <span className="proficiency__name">Bootstrap</span>
          </li>
          <li className="proficiency__item">
            <span className="proficiency__name">Tailwind</span>
          </li>
          <li className="proficiency__item">
            <span className="proficiency__name">JavaScript</span>
          </li>
          <li className="proficiency__item">
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
