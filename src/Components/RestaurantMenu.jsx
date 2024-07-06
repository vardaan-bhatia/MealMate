import React from "react";
import "../CSS/RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const { menuItems, loading } = useRestaurantMenu(resid);

  const { name, city, costForTwoMessage, totalRatingsString, cuisines } =
    menuItems?.cards?.[2]?.card?.card?.info || "";
  const itemCards =
    menuItems?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

  return (
    <>
      <div className="resmenutop">
        {loading ? (
          <Shimmer />
        ) : (
          <div>
            <h1>{name}</h1>
            <p>{city}</p>
            <p>{cuisines?.slice(0, 2).join(", ")}</p>
            <p>
              <b>
                {costForTwoMessage} ● {totalRatingsString}
              </b>
            </p>
            <ol>
              {itemCards.map((item) => (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name || ""}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
