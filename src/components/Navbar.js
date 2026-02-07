import React, { useState, useEffect } from "react";
import "../style/Navbar.css";
import logo from "../images/nimnavbarr.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsProductsOpen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close with ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsProductsOpen(false);
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
    setIsProductsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="nim-navbar">
        <a href="/" className="nim-nav-logo">
          <img src={logo} alt="NIMTech Logo" />
        </a>

        {/* DESKTOP NAV */}
        <nav className="nim-nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/service">Services</a>

          {/* PRODUCTS DROPDOWN (HOVER SAFE) */}
          <div
            className="nim-dropdown"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <span className="nim-dropdown-btn">Products ▾</span>

            <div
              className={`nim-dropdown-menu ${
                isProductsOpen ? "show" : ""
              }`}
            >
              <a href="/seosection">Nim Chat</a>
               <a href="/nimbook" onClick={closeMenu}>NIM Book</a>
            
            </div>
          </div>

          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
          <a href="/enroll" className="nim-enroll-btn">Enroll Now</a>
        </nav>

        {/* HAMBURGER */}
        <button className="nim-hamburger" onClick={openMenu}>
          ☰
        </button>
      </header>

      {/* BACKDROP */}
      <div
        className={`nim-backdrop ${isMenuOpen ? "show" : ""}`}
        onClick={closeMenu}
      />

      {/* MOBILE MENU */}
      <aside className={`nim-overlay ${isMenuOpen ? "open" : ""}`}>
        <button className="nim-close-btn" onClick={closeMenu}>
          &times;
        </button>

        <nav className="nim-overlay-links">
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/service" onClick={closeMenu}>Services</a>

          {/* MOBILE PRODUCTS */}
          <button
            className="nim-mobile-dropdown"
            onClick={() => setIsProductsOpen(!isProductsOpen)}
          >
            Products {isProductsOpen ? "−" : "▾"}
          </button>

          {isProductsOpen && (
            <div className="nim-mobile-submenu">
              <a href="/seosection" onClick={closeMenu}>NIM chat</a>
               <a href="/nimbook" onClick={closeMenu}>NIM Book</a>
            </div>
          )}

          <a href="/careers" onClick={closeMenu}>Careers</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
          <a href="/enroll" onClick={closeMenu} className="nim-enroll-btn-mobile">
            Enroll Now
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
