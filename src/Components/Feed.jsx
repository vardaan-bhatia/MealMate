import React from "react";
import FoodCard from "./FoodCard";
import DishCard from "./DishCard";
import resobj from "../utils/resobj";
import mind from "../utils/mindobj";

const Feed = () => {
  return (
    <>
      <h1 className="mind-heading">What's on your mind?</h1>
      <div className="mind-container">
        {mind.map((e) =>
          e.info && e.info.id ? (
            <DishCard boxes={e} key={e.info.id} />
          ) : (
            console.error("Invalid object structure in mind array:", e)
          )
        )}
      </div>

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
