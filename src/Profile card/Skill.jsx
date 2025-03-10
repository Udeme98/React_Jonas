import React from "react";

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.bgcolor }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

export default Skill;
