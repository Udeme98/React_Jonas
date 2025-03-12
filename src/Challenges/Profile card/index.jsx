import React from "react";
import Header from "./Header";
import Main from "./Main";
import SkillList from "./SkillList";
import "./profile.css";

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

const ProfileCard = () => {
  return (
    <div className="card">
      <Header />
      <div className="data">
        <Main />
        <SkillList />
      </div>
    </div>
  );
};

export default ProfileCard;
