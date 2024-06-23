import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MindSlider from "./MindSlider";
import "../CSS/Feed.css";
import Shimmer from "./Shimmer";

const Feed = () => {
  const [listres, setlistres] = useState([]);
  const [originalList, setOriginalList] = useState([]); // Store original list of restaurants
  const [filterType, setFilterType] = useState(""); // State to store selected filter type
  const [minddata, setMindData] = useState([]);
  const [title, setTitle] = useState("");
  const [cities, setCities] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL);
      const restaurants =
        response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setlistres(restaurants);
      setOriginalList(restaurants); // Store original list

      const dishdata =
        response?.data?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];
      setMindData(dishdata);

      const titleheading =
        response?.data?.data?.cards[1]?.card?.card?.header?.title || "";
      setTitle(titleheading);

      const citiData =
        response?.data?.data?.cards[10]?.card?.card?.cities || [];
      setCities(citiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterByRating = (rating, high) => {
    const filteredList = originalList.filter(
      (restaurant) =>
        rating <= restaurant.info.avgRating && restaurant.info.avgRating <= high
    );
    setlistres(filteredList);
  };

  const filterByDeliveryTime = (time) => {
    const filteredList = originalList.filter(
      (restaurant) => restaurant.info.sla.deliveryTime <= time
    );
    setlistres(filteredList);
  };

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilterType(selectedFilter);

    switch (selectedFilter) {
      case "4.5":
        filterByRating(4.5, 5.0);
        break;
      case "4.0":
        filterByRating(4.0, 4.5);
        break;
      case "3.0":
        filterByRating(3.0, 4.0);
        break;
      case "40":
        filterByDeliveryTime(40);
        break;
      case "30":
        filterByDeliveryTime(30);
        break;
      default:
        setlistres(originalList); // Reset to original list if no filter selected
        break;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (text) => {
    if (text) {
      const showsearch = originalList.filter(
        (e) => e.info.name.toLowerCase().includes(text.toLowerCase()) // filtering search logic
      );
      setlistres(showsearch);
    } else {
      setlistres(originalList);
    }
  };

  return (
    <>
      <Navbar onsearch={handleSearch} /> {/* Navbar of the body */}
      {listres.length == 0 ? (
        <Shimmer />
      ) : (
        <>
          <MindSlider mind={minddata} /> {/* here feed starts */}
          <div className="filter-container">
            <h1 className="f1main">{title}</h1>
            <select value={filterType} onChange={handleFilterChange}>
              <option value="">Select filter...</option>
              <option value="4.5">Ratings 4.5+</option>
              <option value="4.0">⭐⭐⭐⭐+</option>
              <option value="3.0">⭐⭐⭐+</option>
              <option value="40">Delivery Time ≤ 40 mins</option>
              <option value="30">Delivery Time ≤ 30 mins</option>
            </select>
          </div>
          <div className="fcontainer">
            {listres.map((restaurant, index) => (
              <FoodCard restaurant={restaurant} key={index} />
            ))}
          </div>
          <Footer Mumbai={cities} /> {/* this is the footer of the app */}
        </>
      )}
    </>
  );
};

export default Feed;
