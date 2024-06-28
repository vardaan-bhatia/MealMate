import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CSS/RestaurantMenu.css";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [menuItems2, setMenuItems2] = useState([]);

  useEffect(() => {
    MenuFetch();
  }, []);

  const MenuFetch = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_MENU);
      const datachain =
        response?.data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[2]?.card?.card?.itemCards || [];
      setMenuItems(datachain);
      const datachain2 =
        response?.data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[3]?.card?.card?.itemCards || [];
      setMenuItems2(datachain2);
    } catch (error) {
      console.log("error hai", error);
      return error;
    }
  };
  return (
    <>
      <div className="resmenutop">
        {menuItems.length === 0 || menuItems2.length === 0 ? (
          <Shimmer />
        ) : (
          <>
            <ul>
              {menuItems.map((e) => (
                <li key={e?.card?.info?.id}>{e?.card?.info?.name || ""}</li>
              ))}
              <b>{"INDIAN"}</b>
              {menuItems2.map((f) => (
                <li key={f?.card?.info?.id}>{f?.card?.info?.name || ""}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};
export default RestaurantMenu;
