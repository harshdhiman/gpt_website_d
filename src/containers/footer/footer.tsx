import React from "react";
import logo from "./../../assets/logo.svg";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer section__padding ">
      {/*  */}

      <div className="footer__heading main-content">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="footer__btn">
        <button>Request Early Access</button>
      </div>

      {/*  */}

      <div className="footer__links main-content">
        <div className="logo">
          <img src={logo} alt="Logo" loading="lazy" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="footer__links_container">
          <h4>Links</h4>
          <a href="#">Overons</a>
          <a href="#">Social Media</a>
          <a href="#">Counters</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer__links_container">
          <h4>Company</h4>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer__links_container">
          <h4>Get in touch</h4>
          <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
          <a href="#">085-132567</a>
          <a href="#">info@payme.net</a>
        </div>
      </div>

      <div className="footer__copyright">
        <p>© 2021 GPT-R3. All rights reserved.</p>
      </div>
    </div>
  );
};
