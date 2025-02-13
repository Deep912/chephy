import React from "react";
import ReactMarkdown from "react-markdown";

const AiResponce = (props) => {
  return (
    <div className="suggested-recipe-container">
      <h2>Recipe</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </div>
  );
};

export default AiResponce;
