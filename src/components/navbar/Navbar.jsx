import React from "react";
import "./navbar.css";

const NavLinks = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
    <p>
      <a href="#skills">Skills</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLinks />
      <button>Toggle</button>
    </div>
  );
};

export default Navbar;
