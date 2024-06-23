import React from "react";
import "../CSS/FoodCard.css";

const FoodCard = ({ restaurant }) => {
  const {
    name,
    areaName,
    sla,
    costForTwo,
    avgRatingString,
    cloudinaryImageId,
  } = restaurant.info;
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${cloudinaryImageId}`;
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <div className="ftext">
        <h2>{name}</h2>
        <p>{areaName}</p>
        <p>
          <b>Delivery Time:</b> {sla.slaString}
        </p>
        <p>
          <b>Price: </b>
          {costForTwo}
        </p>
        <p>
          <b>Rating: </b>
          {`⭐ ${avgRatingString}`}
        </p>
      </div>
    </div>
  );
};
export default FoodCard;
