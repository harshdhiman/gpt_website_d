import React, { lazy, useState } from "react";
import "./navbar.scss";
import logo from "./../../assets/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

export const Navbar = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const links: {
    name: string;
    link: string;
  }[] = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "What is GPT?",
      link: "#wgpt3",
    },
    {
      name: "Open AI",
      link: "#possiblity",
    },
    {
      name: "Case Studies",
      link: "#features",
    },
    {
      name: "Library",
      link: "#blog",
    },
  ];

  return (
    <div className="navbar main-content">
      <div className="navbar__links">
        {/* Logo */}

        <div className="navbar__links_logo">
          <img src={logo} alt="Main Logo" loading="lazy" />
        </div>

        {/* Links */}

        <ul className="navbar__links_container">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link} className="navbar__link">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Buttons for Sign In and Up */}
      <div className="navbar__signin_container">
        <a href="#" className="navbar__link">
          Sign in
        </a>
        <button>Signup</button>
      </div>

      {/* Mobile Menu */}

      <div className="navbar__menu">
        {!isMenuShown ? (
          <RiMenu3Line onClick={() => setIsMenuShown(!isMenuShown)} />
        ) : (
          <RiCloseLine onClick={() => setIsMenuShown(!isMenuShown)} />
        )}
        {isMenuShown && (
          <div className="navbar__menu_conatiner">
            {/* Links */}
            <ul className="navbar__links_container">
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.link} className="navbar__link">
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Buttons */}

            <div className="navbar__signin_container">
              <a href="#" className="navbar__link">
                Sign in
              </a>
              <button>Signup</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
