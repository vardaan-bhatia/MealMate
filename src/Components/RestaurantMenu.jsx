import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CSS/RestaurantMenu.css";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    MenuFetch();
  }, []);

  const MenuFetch = async () => {
    try {
      const response = await axios.get(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=770885"
      );
      setMenuItems(response.data.data);
    } catch (error) {
      console.log("error hai", error);
    } finally {
      setLoading(false);
    }
  };

  // Safely access itemCards
  const itemCards =
    menuItems?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards || [];

  return (
    <>
      <div className="resmenutop">
        {loading ? (
          <Shimmer />
        ) : (
          <ul>
            {itemCards.map((item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name || ""}</li>
            ))}
            <b>{"INDIAN"}</b>
          </ul>
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
