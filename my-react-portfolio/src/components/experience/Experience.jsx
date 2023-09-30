import "./Experience.css";
import Resume from "../../assets/resume.pdf";
import ExperienceList from "./ExperienceList";
import { FiArrowDown } from "react-icons/fi";

function Experience() {
  // Skill pattern
  const first__column__skills = [
    { skill: "HTML", level: "Advanced" },
    { skill: "CSS", level: "Advanced" },
    { skill: "JavaScript", level: "Advanced" },
  ];

  const second__column__skills = [
    { skill: "Node", level: "Intermediate" },
    { skill: "SQL", level: "Intermediate" },
    { skill: "Express", level: "Intermediate" },
  ];

  const third__column__skills = [
    { skill: "NoSQL", level: "Intermediate" },
    { skill: "React", level: "Intermediate" },
    { skill: "MongoDB", level: "Intermediate" },
  ];

  return (
    <section className="experience__container" id="resume">
      <h1 className="heading__one">My Experience</h1>
      <div className="skill__list">
        <ExperienceList skills={first__column__skills} />
        <ExperienceList skills={second__column__skills} />
        <ExperienceList skills={third__column__skills} />
      </div>
      <div>
        <a href={Resume} download className="resume__download__button">
          <button>
            <span>Download Resume</span>
            <FiArrowDown />
          </button>
        </a>
      </div>
    </section>
  );
}

export default Experience;
