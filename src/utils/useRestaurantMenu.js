import { useEffect, useState } from "react";
import axios from "axios";

const useRestaurantMenu = (resid) => {
  const [ResDetail, setResDetail] = useState(null);
  const [MenuCards, setMenuCards] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MenuFetch = async () => {
      const menuURL = `${process.env.REACT_APP_API_MENU}${resid}`;
      try {
        const response = await axios.get(menuURL);
        const data = response.data.data;
        const resinfo = data?.cards?.[2]?.card?.card?.info || {};
        setResDetail(resinfo);
        const cards =
          data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filterdata = cards.filter(
          (e) =>
            e.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        console.log(filterdata);
        // const fooditems =
        //   data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
        //     ?.card?.itemCards || [];
        setMenuCards(filterdata);
      } catch (error) {
        console.log("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    MenuFetch();
  }, [resid]);

  return { ResDetail, MenuCards, loading };
};

export default useRestaurantMenu;
