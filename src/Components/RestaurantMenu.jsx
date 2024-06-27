import React, { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import "../CSS/RestaurantMenu.css";

const RestaurantMenu = () => {
  const [menuItems1, setMenuItems1] = useState([null]);
  const [menuItems2, setMenuItems2] = useState([null]);

  useEffect(() => {
    MenuFetch();
  }, []);

  const MenuFetch = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_MENU_API_URL);
      const datachain1 =
        response?.data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[1]?.card?.card?.itemCards;
      setMenuItems1(datachain1);
      const datachain2 =
        response?.data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[2]?.card?.card?.itemCards;
      setMenuItems2(datachain2);
    } catch (error) {
      console.log("Error fetching menu data:", error);
    }
  };

  return (
    <>
      <div className="resmenutop">
        {menuItems1[0] === null || menuItems2[0] === null ? (
          <Shimmer />
        ) : (
          <>
            <ul>
              {menuItems1.map((e) => (
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
