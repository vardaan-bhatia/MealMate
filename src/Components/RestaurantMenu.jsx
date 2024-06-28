import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const { resid } = useParams();

  useEffect(() => {
    MenuFetch();
  }, [resid]);

  const MenuFetch = async () => {
    try {
      const response = await axios.get(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=${resid}`
      );
      setMenuItems(response.data.data);
    } catch (error) {
      console.log("error hai", error);
    } finally {
      setLoading(false);
    }
  };
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
