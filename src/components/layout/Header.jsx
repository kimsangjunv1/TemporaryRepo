import React from "react";
import { Link } from "react-router-dom";
export let gwayeon;

console.log("gwayeon : ", gwayeon);

const Header = (test) => {
  return (
    <header
      id="header"
      onClick={() => {
        {
          test.gwayeon;
        }
        alert("윽!");
      }}
    >
      <a href="#main">KIMSANGJUN</a>
      <div className="menu_cont">
        <a href="#javascript">Javascript</a>
        <a href="#game">Game</a>
        <a href="#reference">Reference</a>
        <a href="#site">Site</a>
        <a href="#project">Project</a>
        <a href="#vue&react">Vue/React</a>
      </div>
    </header>
  );
};

export default Header;
