import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import MindSlider from "./MindSlider";
import "../CSS/Feed.css";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Feed = ({ listres, filterChange, title, minddata }) => {
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    setFilterType("");
  }, []);

  const handleFilter = (e) => {
    const selectedFilter = e.target.value;
    setFilterType(selectedFilter);
    filterChange(selectedFilter);
  };

  return (
    <>
      {listres.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          {minddata.length > 0 && <MindSlider mind={minddata} />}
          <div className="filter-container">
            <h1 className="f1main">{title}</h1>
            <select value={filterType} onChange={handleFilter}>
              <option value="">Select filter...</option>
              <option value="4.5">Top Rated 4.5+</option>
              <option value="4.0">⭐⭐⭐⭐ Rating</option>
              <option value="3.0">⭐⭐⭐ Rating</option>
              <option value="30">Delivery Time Less than 30 mins</option>
            </select>
          </div>
          <div className="fcontainer">
            {listres.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
                className="linkcss"
              >
                <RestaurantCard restaurant={restaurant} />
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Feed;
