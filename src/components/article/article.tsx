import React from "react";
import "./article.scss";

export const Article = (props: {
  image: string;
  title: string;
  date: string;
}) => {
  return (
    <div className="article__container">
      {/*  */}

      <div className="article__container_image">
        <img src={props.image} alt={props.title} loading="lazy" />
      </div>

      {/*  */}

      <div className="article__container_content">
        <div>
          <p>{props.date}</p>
          <h3>{props.title}</h3>
        </div>

        <p>Read full Article</p>
      </div>

      {/*  */}
    </div>
  );
};
