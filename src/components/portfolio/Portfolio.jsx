import "./Portfolio.css";
import React from 'react';
import PortfolioImage from "../../assets/portfolio1.png";
import PasswordImage from "../../assets/password.png";
import Diy from "../../assets/diy.png";
import Trivia from "../../assets/trivia.png";
import Readme from "../../assets/readme.png";
import NoteTaker from "../../assets/notetaker.jpeg";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return (
    <section className="portfolio__container" id="portfolio">
      <h1 className="heading__one">Portfolio</h1>
      <div className="portfolio__cards">
        <PortfolioCard image={PortfolioImage} title={'React Portfolio Site (This One)'} liveLink={'http://collinhaws.com/'} github={'https://github.com/CHawsCoding/my-react-portfolio'} />
        <PortfolioCard image={Diy} title={'Social Network for DIY Projects'} liveLink={'https://craft-house-333df780d3f8.herokuapp.com/'} github={'https://github.com/CHawsCoding/CraftHouse'} />
        <PortfolioCard image={Trivia} title={'Javascript Trivia Game'} liveLink={'https://chawscoding.github.io/js-dev-trivia/'} github={'https://github.com/CHawsCoding/js-dev-trivia'} />
        <PortfolioCard image={NoteTaker} title={'Express Note Taker'} liveLink={'#'} github={'https://github.com/CHawsCoding/express-note-taker'} />
        <PortfolioCard image={Readme} title={'Readme genrator'} liveLink={'#'} github={'https://github.com/CHawsCoding/the-readme-gen'} />
        <PortfolioCard image={PasswordImage} title={'Password Generator'} liveLink={'https://chawscoding.github.io/password-generator-project/'} github={'https://github.com/CHawsCoding/password-generator-project'} />
      </div>
    </section>
  );
}

export default Portfolio;
