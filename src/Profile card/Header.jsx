import React from "react";
import pic from "./image/profilepic.jpg";

const Header = () => {
  return (
    <header>
      <img src={pic} className="avatar" alt="Udeme" />
    </header>
  );
};

export default Header;
