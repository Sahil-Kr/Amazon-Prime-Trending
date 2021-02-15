import React from "react";

const Slide = (props) => {
  return (
    <div id="slide">
      <h1 data-testid="title">{props.title}</h1>
      <p data-testid="text">{props.text}</p>
    </div>
  );
};

export default Slide;
