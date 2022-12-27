import React from "react";
import "./header.scss";

import peopleImg from "./../../assets/people.png";
import aiImg from "./../../assets/ai.png";

export const Header = () => {
  return (
    <div className="header section__padding main-content" id="home">
      <div className="header__content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3, OpenAI
        </h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        {/*  */}

        <div className="header__content_input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
          <button>Get started!</button>
        </div>

        {/* People */}

        <div className="header__content_people">
          <img src={peopleImg} alt="peoples" loading="lazy" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      {/* Header Image */}
      <div className="header__image">
        <img
          src={aiImg}
          alt="an image with a geometrical face"
          loading="lazy"
        />
      </div>
    </div>
  );
};
