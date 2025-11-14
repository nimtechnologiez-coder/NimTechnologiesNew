import React, { useState, useEffect } from "react";
import "../style/Navbar.css";
import logo from "../images/nimnavbarr.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="nim-navbar" role="navigation">
        <a href="/" className="nim-nav-logo">
          <img src={logo} alt="NIMTech Logo" />
        </a>

        <nav className="nim-nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/service">Services</a>
          <a href="/nimbook">Products</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </nav>

        <button className="nim-hamburger" onClick={openMenu} aria-label="Open Menu">
          ☰
        </button>
      </header>

      {/* BACKDROP */}
      <div className={`nim-backdrop ${isMenuOpen ? "show" : ""}`} onClick={closeMenu}></div>

      {/* MOBILE OVERLAY MENU */}
      <aside className={`nim-overlay ${isMenuOpen ? "open" : ""}`} role="dialog">
        <button className="nim-close-btn" onClick={closeMenu}>
          &times;
        </button>

        <nav className="nim-overlay-links">
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/service" onClick={closeMenu}>Services</a>
          <a href="/nimbook" onClick={closeMenu}>Products</a>
          <a href="/careers" onClick={closeMenu}>Careers</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
