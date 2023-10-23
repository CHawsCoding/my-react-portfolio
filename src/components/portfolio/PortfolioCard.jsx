import { TbExternalLink } from "react-icons/tb";
import { AiOutlineGithub } from "react-icons/ai";
import React from 'react';


function PortfolioCard({image, title, liveLink, github}) {
  return (
    <div className="portfolio__card">
      <img src={image} alt="image for specific project" />
      <h2 className="heading__two">{title}</h2>
      <div className="portfolio__buttons">
        <a href={liveLink}>
          <button>
            <span>Live View</span>
            <TbExternalLink />
          </button>
        </a>
        <a href={github}>
          <button>
            <span>Github</span>
            <AiOutlineGithub />
          </button>
        </a>
      </div>
    </div>
  );
}

export default PortfolioCard;
