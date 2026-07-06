import React, { useState } from "react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={toggleMenu}>
        ☰ Menu
      </button>

      {open && (
        <ul className="dropdown">
          <li>• <a href="#home">Home</a></li>
          <li>• <a href="#projects">Projects</a></li>
          <li>• <a href="#about">About</a></li>
          <li>• <a href="#contact">Contact</a></li>
        </ul>
      )}

      <div className="social-links">
        <a href="https://github.com/tinxq" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/tinxq" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://app.netlify.com/teams/tinxq/projects" target="_blank" rel="noopener noreferrer">
          <SiNetlify />
        </a>
        <a href="tafakurtarig@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;