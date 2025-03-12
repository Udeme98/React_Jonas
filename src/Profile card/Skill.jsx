import React from "react";

const Skill = ({ skill, bgcolor }) => {
  return (
    <div className="skill" style={{ backgroundColor: bgcolor }}>
      <span>{skill}</span>
      {/* <span>{emoji}</span> */}
    </div>
  );
};

export default Skill;
