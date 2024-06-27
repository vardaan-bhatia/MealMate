import React from "react";
import "../CSS/RestaurantCard.css";

const RestaurantCard = ({ restaurant }) => {
  const {
    name,
    areaName,
    sla,
    costForTwo,
    avgRatingString,
    cuisines,
    cloudinaryImageId,
  } = restaurant.info;

  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${cloudinaryImageId}`;
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <div className="ftext">
        <h2>{name} </h2>
        <p>
          {" "}
          {`⭐ ${avgRatingString}`}
          {"  ●  "}
          {sla.slaString}
        </p>
        <p>{areaName}</p>
        <p>{cuisines.slice(0, 2).join(", ")}</p>

        <p>
          <b>Price: </b>
          {costForTwo}
        </p>
      </div>
    </div>
  );
};
export default RestaurantCard;
