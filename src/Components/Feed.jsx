import React, { useState } from "react";
// import axios from "axios";
import FoodCard from "./FoodCard";
import MindSlider from "./MindSlider";
import "../CSS/Feed.css";
import livedata from "../utils/livedata";

const Feed = () => {
  const initialRestaurants =
    livedata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
  const [listres, setlistres] = useState(initialRestaurants);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("/api", {
  //       params: {
  //         lat: 30.7339,
  //         lng: 76.7889,
  //         isSeoHomepageEnabled: true,
  //         page_type: "DESKTOP_WEB_LISTING",
  //       },
  //     });
  //     const main = response.data;
  //     console.log(main);
  //     if (main.data && main.data.cards && main.data.cards.length > 2) {
  //       const restaurants =
  //         main.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
  //       setlistres(restaurants);
  //     } else {
  //       console.error("Unexpected data structure in API response:", main);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data from local API:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const filterRating = () => {
    const filterR = listres.filter((r) => r.info.avgRating > 4);
    setlistres(filterR);
  };

  const filterTime = () => {
    const filterT = listres.filter((t) => t.info.sla.deliveryTime < 30);
    setlistres(filterT);
  };

  const handleFilterChange = (e) => {
    const filterType = e.target.value;
    if (filterType === "rating") {
      filterRating();
    } else {
      filterTime();
    }
  };

  return (
    <>
      <MindSlider mind={livedata.data.cards[0].card.card.imageGridCards.info} />
      <div className="filter-container">
        <h1 className="f1main">Top restaurant chains in Patiala</h1>
        <select onChange={handleFilterChange}>
          <option value="">Select filter...</option>
          <option value="rating">Filter by Rating</option>
          <option value="time">Filter by Delivery Time</option>
        </select>
      </div>
      <div className="fcontainer">
        {listres.length > 0 ? (
          listres.map((u, index) =>
            u.info && u.info.id ? (
              <FoodCard restaurant={u} key={index} />
            ) : (
              console.error("Invalid object structure in resobj array:", u)
            )
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Feed;
