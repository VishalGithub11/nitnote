import React from "react";
import Logo from "../image/nitnoteslogo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="Hleft">
        <div className="imglogo">
          <img src={Logo} alt="logo" width="160px" height="100px" />
        </div>
        <div className="Htext"> nitnotes </div>
      </div>
    </>
  );
};

export default Header;
