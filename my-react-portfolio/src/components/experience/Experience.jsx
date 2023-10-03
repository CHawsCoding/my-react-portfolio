import "./Experience.css";
import Resume from "../../assets/resume.pdf";
import { FiArrowDown } from "react-icons/fi";

function Experience() {
  // Skill pattern

  return (
    <section className="experience__container" id="resume">
      <h1 className="heading__one">My Experience</h1>
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
