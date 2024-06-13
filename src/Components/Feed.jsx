import React from "react";
import FoodCard from "./FoodCard";
import DishCard from "./DishCard";
import resobj from "../utils/resobj";
import mind from "../utils/mindobj";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/Feed.css";
import "../CSS/SlickCustom.css";

const Feed = () => {
  const mindSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <div className="slick-arrow slick-next"></div>,
    prevArrow: <div className="slick-arrow slick-prev"></div>,
  };

  return (
    <>
      <h1 className="mind-heading">What's on your mind?</h1>
      <Slider {...mindSettings} className="mind-container">
        {mind.map((e) =>
          e.info && e.info.id ? (
            <DishCard boxes={e} key={e.info.id} />
          ) : (
            console.error("Invalid object structure in mind array:", e)
          )
        )}
      </Slider>
      <h1 className="f1main">Top restaurant chains in Patiala</h1>
      <div className="fcontainer">
        {resobj.map((index) =>
          index.info && index.info.id ? (
            <FoodCard restaurant={index} key={index.info.id} />
          ) : (
            console.error("Invalid object structure in resobj array:", index)
          )
        )}
      </div>
    </>
  );
};

export default Feed;
