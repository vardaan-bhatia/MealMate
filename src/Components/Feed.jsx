import React from "react";
import FoodCard from "./FoodCard";
import DishCard from "./DishCard";
import resobj from "../utils/resobj";
import mind from "../utils/mindobj";

const Feed = () => {
  return (
    <>
      <DishCard />
      <h1 className="f1main">Top restaurant chains in Patiala</h1>
      <div className="fcontainer">
        {resobj.map((index) => (
          <FoodCard restaurant={index} key={index.info.id} />
        ))}
      </div>
    </>
  );
};

export default Feed;
