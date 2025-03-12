import React from "react";

const Skill = ({ skill, bgcolor, level }) => {
  return (
    <div className="skill" style={{ backgroundColor: bgcolor }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
};

export default Skill;
