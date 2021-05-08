import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">copyright © {new Date().getFullYear()}</div>
    </>
  );
};

export default Footer;
