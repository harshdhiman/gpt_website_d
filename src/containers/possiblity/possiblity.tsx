import React from "react";
import "./possiblity.scss";

import possiblityImg from "./../../assets/possibility.png";

export const Possiblity = () => {
  return (
    <div className="psb section__padding" id="possiblity">
      {/*  */}

      <div className="psb__image">
        <img
          src={possiblityImg}
          alt="Girl wearing a VR Headset"
          loading="lazy"
        />
      </div>

      {/*  */}

      <div className="psb__content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};
