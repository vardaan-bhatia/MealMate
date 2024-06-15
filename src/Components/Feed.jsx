import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import resobj from "../utils/resobj";
import mind from "../utils/mindobj";
import MindSlider from "./MindSlider";
import "../CSS/Feed.css";

const Feed = () => {
  const [listres, setlistres] = useState(resobj);

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
    } else {
      filterTime();
    }
  };

  useEffect(() => {
    console.log("Component did update");
  }, [listres]);

  return (
    <>
      <MindSlider mind={mind} />
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
