import React from "react";
import "./header.css";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="logo" />
      <h1 className="header__h1">rick and morty</h1>
    </header>
  );
};

export default Header;
