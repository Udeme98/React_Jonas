import React from "react";
import Skill from "./Skill";

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👍" bgcolor="blue" />
      <Skill skill="HTML + CSS" emoji="👍" bgcolor="red" />
      <Skill skill="Web Dev" emoji="👍" bgcolor="green" />
    </div>
  );
};

export default SkillList;
