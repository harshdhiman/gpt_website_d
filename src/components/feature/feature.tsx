import React from "react";
import "./feature.scss";

export const Feature = (props: { title: string; text: string }) => {
  return (
    <div className="feature__container">
      <div className="feature__container_title">
        <div></div>
        <h1>{props.title}</h1>
      </div>
      <div className="feature__container_text">{props.text}</div>
    </div>
  );
};
