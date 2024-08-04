import React, { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import MindSlider from "./MindSlider";
import "../SCSS/Feed.scss";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Visible } from "../utils/ContextLocation";

const Feed = ({ listres, filterChange, title, minddata }) => {
  const [filterType, setFilterType] = useState("");
  const { setShowLocation } = useContext(Visible);

  useEffect(() => {
    setFilterType("");
  }, []);

  const handleFilter = (e) => {
    const selectedFilter = e.target.value;
    setFilterType(selectedFilter);
    filterChange(selectedFilter);
  };
  const handleCloseLocation = () => {
    setShowLocation(false); // Hide location on close button click
  };
  return (
    <>
      <div onClick={handleCloseLocation}>
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
                  <RestaurantCard {...restaurant} />
                  {/*we have learned the new way to pass prop for multiple props using spread operator...  or we can destructure in the child components either just take out direct in place of prop ep11 */}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>{" "}
    </>
  );
};

export default Feed;
