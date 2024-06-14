import React, { useState } from "react";
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
  const [listres, setlistres] = useState(resobj);
  const FilterRating = () => {
    const filterR = listres.filter((r) => r.info.avgRating > 4.4);
    setlistres(filterR);
  };
  const FilterTime = () => {
    const filterT = listres.filter((t) => t.info.sla.deliveryTime < 25);
    setlistres(filterT);
  };
  const handleFilterChange = (e) => {
    const filtertype = e.target.value;
    if (filtertype === "rating") {
      FilterRating();
    } else {
      FilterTime();
    }
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
      <div className="filter-container">
        <h1 className="f1main">Top restaurant chains in Patiala</h1>
        <select onChange={handleFilterChange}>
          <option value="">Select filter...</option>
          <option value="rating">Filter by Rating</option>
          <option value="time">Filter by Delivery Time</option>
        </select>
      </div>
      <div className="fcontainer">
        {listres.map((u) =>
          u.info && u.info.id ? (
            <FoodCard restaurant={u} key={u.info.id} />
          ) : (
            console.error("Invalid object structure in resobj array:", u)
          )
        )}
      </div>
    </>
  );
};

export default Feed;
