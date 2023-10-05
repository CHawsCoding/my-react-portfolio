import "./Portfolio.css";
import React from 'react';
import PortfolioImage from "../../assets/portfolio.png";
import PasswordImage from "../../assets/password.png";
import Weather from "../../assets/weather.png";
import Trivia from "../../assets/trivia.png";
import Readme from "../../assets/readme.png";
import NoteTaker from "../../assets/notetaker.jpeg";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return (
    <section className="portfolio__container" id="portfolio">
      <h1 className="heading__one">Portfolio</h1>
      <div className="portfolio__cards">
        <PortfolioCard image={PortfolioImage} title={'First Portfolio project'} liveLink={'https://chawscoding.github.io/project-2-portfolio/'} github={'https://github.com/CHawsCoding/project-2-portfolio'} />
        <PortfolioCard image={PasswordImage} title={'Password Generator'} liveLink={'https://chawscoding.github.io/password-generator-project/'} github={'https://github.com/CHawsCoding/password-generator-project'} />
        <PortfolioCard image={Weather} title={'Web Design Portfolio'} liveLink={'https://chawscoding.github.io/weather-forcaster-genius/'} github={'https://github.com/CHawsCoding/weather-forcaster-genius'} />
        <PortfolioCard image={Trivia} title={'Javascript Trivia Game'} liveLink={'https://chawscoding.github.io/js-dev-trivia/'} github={'https://github.com/CHawsCoding/js-dev-trivia'} />
        <PortfolioCard image={NoteTaker} title={'Express Note Taker'} liveLink={'#'} github={'https://github.com/CHawsCoding/express-note-taker'} />
        <PortfolioCard image={Readme} title={'Readme genrator'} liveLink={'#'} github={'https://github.com/CHawsCoding/the-readme-gen'} />
      </div>
    </section>
  );
}

export default Portfolio;
