import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import Footer from "./Components/Footer";

const App = () => {
  const [listres, setListres] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [minddata, setMindData] = useState([]);
  const [title, setTitle] = useState("");
  const [cities, setCities] = useState([]);
  const [filterType, setFilterType] = useState("");

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

  const handleSearch = (text) => {
    if (text) {
      const showsearch = originalList.filter((e) => {
        const restaurantNameMatches = e.info.name
          .toLowerCase()
          .includes(text.toLowerCase());
        const cuisinesIncludeText =
          Array.isArray(e.info.cuisines) &&
          e.info.cuisines.some((cuisine) =>
            cuisine.toLowerCase().includes(text.toLowerCase())
          );

        return restaurantNameMatches || cuisinesIncludeText;
      });
      setListres(showsearch);
    } else {
      setListres(originalList);
    }
  };

  const handleFilterChange = (selectedFilter) => {
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
      case "30":
        filterByDeliveryTime(30);
        break;
      default:
        setListres(originalList);
        break;
    }
  };

  const filterByRating = (rating, high) => {
    const filteredList = originalList.filter(
      (restaurant) =>
        rating <= restaurant.info.avgRating && restaurant.info.avgRating <= high
    );
    setListres(filteredList);
  };

  const filterByDeliveryTime = (time) => {
    const filteredList = originalList.filter(
      (restaurant) => restaurant.info.sla.deliveryTime <= time
    );
    setListres(filteredList);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Feed
        listres={listres}
        minddata={minddata}
        title={title}
        cities={cities}
        filterType={filterType}
        filterChange={handleFilterChange}
        originalList={originalList}
      />
      <Footer Mumbai={cities} />
    </>
  );
};

export default App;
