import { useState } from "react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <button
        type="button"
        className="menu-btn"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "✕ Close" : "☰ Menu"}
      </button>

      {open && (
        <ul className="dropdown" id="site-menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="social-links">
        <a
          href="https://github.com/tinxq"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/tinx.q"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a href="mailto:tafakurtarig@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;