import React, { Component, useState } from "react";
import "../styles/App.css";
import Slide from "./Slide/Slide";
import Navigation from "./Navigation/Navigation";

const App = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlideHandler = () => {
    if (currentSlide < props.slides.length - 1) {
      setCurrentSlide(+currentSlide + 1);
    }
  };

  const prevSlideHandler = () => {
    if (currentSlide > 0) {
      setCurrentSlide(+currentSlide - 1);
    }
  };

  const restartHandler = () => setCurrentSlide(0);

  return (
    <>
      <Slide
        title={props.slides[+currentSlide].title}
        text={props.slides[+currentSlide].text}
      />
      <Navigation
        isFirst={currentSlide == 0}
        isLast={currentSlide == props.slides.length - 1}
        prev={prevSlideHandler}
        restart={restartHandler}
        next={nextSlideHandler}
      />
    </>
  );
};

export default App;
