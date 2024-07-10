import React, { useState } from "react";
import "../CSS/RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const { ResDetail, MenuCards, loading } = useRestaurantMenu(resid);

  if (loading) {
    return <Shimmer />;
  }
  if (!ResDetail) {
    return <div>Error loading restaurant details</div>; // we have used this beacuse destructring used before the api call and return data even there is no data either we can use ResDetail.name and etc something like that  for everytime
  }
  const {
    name,
    city,
    areaName,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    cuisines,
  } = ResDetail;

  return (
    <div className="resmenutop">
      <center>
        <div className="Top_details">
          <h2>{name}</h2>
          <p className="place">
            {city} - {areaName}
          </p>
          <p className="cuisines">{cuisines?.slice(0, 2).join(", ")}</p>
          <p>
            <b>
              {costForTwoMessage} ●⭐{avgRating} ({totalRatingsString})
            </b>
          </p>
        </div>
        <div className="category_item">
          <ol style={{ listStyle: "none" }}>
            {MenuCards.map((category) => (
              <li key={category.card.card.title}>
                <MenuCategory {...category} />
              </li>
            ))}
          </ol>
        </div>
      </center>
    </div>
  );
};

export default RestaurantMenu;
