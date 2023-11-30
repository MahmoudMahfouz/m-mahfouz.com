import React from "react";

const Article = ({ title, position, date, children }) => {
  return (
    <article>
      <h3>{title}</h3>
      <div className="exp-header">
        <p>{position}</p>
        <p>{date}</p>
      </div>
      <ul>{children}</ul>
    </article>
  );
};

export default Article;
