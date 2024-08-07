import React, { useContext, useState } from "react";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import Footer from "./Components/Footer";
import useRestaurantData from "./utils/useRestaurantData";
import { Visible } from "./utils/ContextLocation";

const App = () => {
  const [filterType, setFilterType] = useState("");
  const { listres, setListres, originalList, minddata, title, cities } =
    useRestaurantData();
  const { showLocation } = useContext(Visible);

  const handleSearch = (text) => {
    if (text) {
      const showResSearch = originalList.filter((e) => {
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
      setListres(showResSearch);
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
        rating <= restaurant.info.avgRating && restaurant.info.avgRating < high
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
      <div
        style={
          showLocation
            ? {
                overflow: "hidden",
                maxHeight: "100vh",
              }
            : {}
        }
      >
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
      </div>
    </>
  );
};

export default App;
