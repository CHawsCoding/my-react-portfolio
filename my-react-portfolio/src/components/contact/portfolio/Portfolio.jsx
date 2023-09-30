import "./Portfolio.css";
import PortfolioImage from "../../assets/portfolio.jpg";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return (
    <section className="portfolio__container" id="portfolio">
      <h1 className="heading__one">Portfolio</h1>
      <div className="portfolio__cards">
        <PortfolioCard image={PortfolioImage} title={'Web Design Portfolio'} liveLink={'#'} github={'#'} />
        <PortfolioCard image={PortfolioImage} title={'Web Design Portfolio'} liveLink={'#'} github={'#'} />
        <PortfolioCard image={PortfolioImage} title={'Web Design Portfolio'} liveLink={'#'} github={'#'} />
        <PortfolioCard image={PortfolioImage} title={'Web Design Portfolio'} liveLink={'#'} github={'#'} />
        <PortfolioCard image={PortfolioImage} title={'Web Design Portfolio'} liveLink={'#'} github={'#'} />
        <PortfolioCard image={PortfolioImage} title={'Web Design Portfolio'} liveLink={'#'} github={'#'} />
      </div>
    </section>
  );
}

export default Portfolio;
