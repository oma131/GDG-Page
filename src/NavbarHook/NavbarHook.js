// CombinedNavbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import GdgLogo from "../components/GdgLogo";
import Buttons from "../components/Buttons";
import "./NavbarHook.css";

const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowMenu(!showMenu);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
      setShowMenu(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";

    return (
      <div className="nav__main">
        <ul className={listClassName}>
        <li>
            <NavLink to="/about" className={linkClassName} onClick={closeMobileMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upcoming-events"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              Upcoming Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/past-events"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              Past Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              Gallery
            </NavLink>
          </li>
        </ul>

        <Buttons style={{ backgroundColor: '#000000', color: 'white' }}>
          Join Our Community
        </Buttons>
      </div>
    );
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <GdgLogo />
        </NavLink>

        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}

        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          <div
            className={`nav__menu ${showMenu ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavbarHook;
