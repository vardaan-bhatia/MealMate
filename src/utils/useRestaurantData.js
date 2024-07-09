import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const useRestaurantData = () => {
  const [listres, setListres] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [minddata, setMindData] = useState([]);
  const [title, setTitle] = useState("");
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL);
        const data = response.data.data;
        const restaurants =
          data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
          [];
        const dishdata = data.cards[0]?.card?.card?.imageGridCards?.info || [];
        const titleheading = data.cards[1]?.card?.card?.header?.title || "";
        const citiData = data.cards[10]?.card?.card?.cities || [];
        setListres(restaurants);
        setOriginalList(restaurants);
        setMindData(dishdata);
        setTitle(titleheading);
        setCities(citiData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return { listres, setListres, originalList, minddata, title, cities };
};

export default useRestaurantData;
