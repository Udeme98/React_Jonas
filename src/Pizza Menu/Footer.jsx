import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <small>{new Date().toLocaleTimeString()}. We are currently open</small>
    </footer>
  );
};

export default Footer;
