import React from "react";
import "../CSS/RestaurantCard.scss";

const RestaurantCard = ({ info }) => {
  const {
    name,
    areaName,
    sla,
    costForTwo,
    avgRatingString,
    cuisines,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    aggregatedDiscountInfoV2,
  } = info;

  const imageUrl = `${process.env.REACT_APP_IMAGE_URL}${cloudinaryImageId}`;
  const heading =
    aggregatedDiscountInfoV2?.header || aggregatedDiscountInfoV3?.header;
  const subheading =
    aggregatedDiscountInfoV2?.subHeader || aggregatedDiscountInfoV3?.subHeader;
  return (
    <div className="card">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
        {(heading || subheading) && (
          <div className="offer-label">
            {heading} {subheading}
          </div>
        )}
      </div>
      <div className="ftext">
        <h2>{name}</h2>
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
