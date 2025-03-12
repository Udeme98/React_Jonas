import React from "react";
import Skill from "./Skill";

const skills = [
  {
    skill: "HTML/CSS",
    level: "advanced",
    color: "#2662ea",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#efd81d",
  },
  {
    skill: "Git/GitHub",
    level: "intermediate",
    color: "#e84f33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60dafb",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#ff3b00",
  },
];

const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map((skill) => {
        return (
          <Skill
            key={skill.skill}
            skill={skill.skill}
            bgcolor={skill.color}
            level={skill.level}
          />
        );
      })}
    </div>
  );
};

export default SkillList;
