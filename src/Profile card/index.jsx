import React from "react";
import Header from "./Header";
import Main from "./Main";
import SkillList from "./SkillList";
import "./profile.css";

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
