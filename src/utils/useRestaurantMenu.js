import { useEffect, useState } from "react";
import axios from "axios";
import { LatandLng } from "./ContextLocation";
import { useContext } from "react";

const useRestaurantMenu = (resid) => {
  const [ResDetail, setResDetail] = useState(null);
  const [MenuCards, setMenuCards] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    cordinates: { lat, lng },
  } = useContext(LatandLng);

  useEffect(() => {
    const MenuFetch = async () => {
      try {
        const response = await axios.get(
          `/api/menu?lat=${lat}&lng=${lng}&resid=${resid}`
        );
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
