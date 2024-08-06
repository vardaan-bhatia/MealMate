import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { LatandLng } from "./ContextLocation";

const useRestaurantData = () => {
  const [listres, setListres] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [minddata, setMindData] = useState([]);
  const [title, setTitle] = useState("");
  const [cities, setCities] = useState([]);

  const {
    cordinates: { lat, lng },
  } = useContext(LatandLng);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/data?lat=${lat}&lng=${lng}`);
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
  }, [lat, lng]);
  return { listres, setListres, originalList, minddata, title, cities };
};

export default useRestaurantData;
