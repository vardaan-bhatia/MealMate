import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";
import MindSlider from "./MindSlider";
import "../CSS/Feed.css";
import livedata from "../utils/livedata";

const Feed = () => {
  const [listres, setlistres] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const restaurants =
        response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setlistres(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterRating = () => {
    const filterR = listres.filter((r) => r.info.avgRating > 4.4);
    setlistres(filterR);
  };

  const filterTime = () => {
    const filterT = listres.filter((t) => t.info.sla.deliveryTime < 25);
    setlistres(filterT);
  };

  const handleFilterChange = (e) => {
    const filterType = e.target.value;
    if (filterType === "rating") {
      filterRating();
    } else if (filterType === "time") {
      filterTime();
    }
  };

  return (
    <>
      <MindSlider mind={livedata.data.cards[0].card.card.imageGridCards.info} />
      <div className="filter-container">
        <h1 className="f1main">Top restaurant chains in Patiala</h1>
        <select onChange={handleFilterChange}>
          <option value="">Select filter...</option>
          <option value="rating">Filter by Rating</option>
          <option value="time">Filter by Delivery Time</option>
        </select>
      </div>
      <div className="fcontainer">
        {listres.length > 0 ? (
          listres.map((u, index) =>
            u.info && u.info.id ? (
              <FoodCard restaurant={u} key={index} />
            ) : (
              console.error("Invalid object structure in resobj array:", u)
            )
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Feed;
