function Circle({ index }) {
  let color = "";
  switch (index) {
    case 0:
      color = "color__one";
      break;
    case 1:
      color = "color__two";
      break;
    case 2:
      color = "color__three";
      break;
    default:
      color = "color__default";
  }

  return (
    <div className={`circle ${color}`}>
      <div className="inner__circle"></div>
    </div>
  );
}

function ExperienceList({ skills }) {
  return (
    <div className="skill__single__list">
      {skills.map((object, index) => {
        return (
          <div className="item" key={index}>
            <h3 className="heading__three">{object.skill}</h3>
            <p>{object.level}</p>
            <Circle index={index} />
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceList;
