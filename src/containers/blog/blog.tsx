import React from "react";
import "./blog.scss";
import { Article } from "../../components";

import blog1 from "./../../assets/blog01.png";
import blog2 from "./../../assets/blog02.png";
import blog3 from "./../../assets/blog03.png";
import blog4 from "./../../assets/blog04.png";
import blog5 from "./../../assets/blog05.png";

export const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      {/*  */}

      <div className="blog__heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>

      {/*  */}

      <div className="blog__container">
        <div className="blog__container_a">
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            image={blog1}
            date="Sep 26, 2021"
          />
        </div>
        <div className="blog__container_b">
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            image={blog2}
            date="Sep 30, 2021"
          />
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            image={blog3}
            date="Oct 2, 2021"
          />
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            image={blog4}
            date="Oct 5, 2021"
          />
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            image={blog5}
            date="Oct 10, 2021"
          />
        </div>
      </div>

      {/*  */}
    </div>
  );
};
