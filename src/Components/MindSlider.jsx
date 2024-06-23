// MindSlider.js
import React from "react";
import Slider from "react-slick";
import DishCard from "./DishCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/SlickCustom.css";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  ></button>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  ></button>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 2,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
};

const MindSlider = ({ mind }) => (
  <>
    <h1 className="mind-heading">What's on your mind?</h1>
    <Slider {...settings} className="mind-container">
      {mind.map((e) =>
        e.id ? (
          <DishCard boxes={e} key={e.id} />
        ) : (
          console.log("Error loading dish:", e)
        )
      )}
    </Slider>
  </>
);

export default MindSlider;
