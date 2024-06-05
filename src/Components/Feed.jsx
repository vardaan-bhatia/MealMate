import React from "react";
import FoodCard from "./FoodCard";
import resobj from "../resobj";

const Feed = () => {
  return (
    <>
      <h1 className="f1main">Top restaurant chains in Patiala</h1>
      <div className="fcontainer">
        <FoodCard restaurant={resobj[0]} />
        <FoodCard restaurant={resobj[1]} />
        <FoodCard restaurant={resobj[2]} />
        <FoodCard restaurant={resobj[3]} />
        <FoodCard restaurant={resobj[4]} />
        <FoodCard restaurant={resobj[5]} />
        <FoodCard restaurant={resobj[6]} />
        <FoodCard restaurant={resobj[7]} />
        <FoodCard restaurant={resobj[8]} />
        <FoodCard restaurant={resobj[9]} />
        <FoodCard restaurant={resobj[10]} />
        <FoodCard restaurant={resobj[11]} />
        <FoodCard restaurant={resobj[12]} />
        <FoodCard restaurant={resobj[13]} />
        <FoodCard restaurant={resobj[14]} />
        <FoodCard restaurant={resobj[15]} />
        <FoodCard restaurant={resobj[16]} />
        <FoodCard restaurant={resobj[17]} />
        <FoodCard restaurant={resobj[18]} />
        <FoodCard restaurant={resobj[19]} />
      </div>
    </>
  );
};

export default Feed;
