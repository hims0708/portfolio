import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar">
      <h2>MyPortfolio</h2>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        {/* <li><a href="#resume">Resume</a></li> */}
        <li><a href="#contact">Contact</a></li>
        <li>
          <button className="theme-btn" onClick={toggleDark}>
            {dark ? "☀" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
