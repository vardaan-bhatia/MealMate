import { useEffect, useState } from "react";
import axios from "axios";

const useRestaurantMenu = (resid) => {
  const [menuItems, setMenuItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MenuFetch = async () => {
      const menuURL = `${process.env.REACT_APP_API_MENU}${resid}`;
      try {
        const response = await axios.get(menuURL);
        setMenuItems(response.data.data);
      } catch (error) {
        console.log("error hai", error);
      } finally {
        setLoading(false);
      }
    };
    MenuFetch();
  }, [resid]);

  return { menuItems, loading };
};

export default useRestaurantMenu;
