import React from "react";
import "./brand.scss";

import google from "../../assets/google.png";
import atlassian from "../../assets/atlassian.png";
import slack from "../../assets/slack.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

export const Brand = () => {
  return (
    <div className="brand section__padding">
      <div>
        <img src={google} alt="google" loading="lazy" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" loading="lazy" />
      </div>
      <div>
        <img src={slack} alt="slack" loading="lazy" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" loading="lazy" />
      </div>
      <div>
        <img src={shopify} alt="shopify" loading="lazy" />
      </div>
    </div>
  );
};
