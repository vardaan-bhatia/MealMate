import React from "react";

const DishCard = ({ boxes }) => {
  const { imageId, accessibility } = boxes.info;
  const image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imageId}`;
  return (
    <div className="mind-item">
      <img src={image} alt={accessibility.altText} />
    </div>
  );
};

export default DishCard;
