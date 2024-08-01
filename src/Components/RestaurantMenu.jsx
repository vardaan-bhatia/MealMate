import React, { useState } from "react";
import "../CSS/RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import usefilterMenu from "../utils/usefilterMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const { ResDetail, MenuCards, loading } = useRestaurantMenu(resid);
  const [OpenList, setOpenList] = useState(0);
  const [showVeg, setShowVeg] = useState(false);
  const [showNonVeg, setShowNonVeg] = useState(false);
  const [bestSeller, setBestSeller] = useState(false);
  const [showOffers, setShowOffers] = useState(false);

  if (loading) {
    return <Shimmer />;
  }
  if (!ResDetail) {
    return <div>Error loading restaurant details</div>;
  }

  const {
    name,
    city,
    areaName,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    cuisines,
  } = ResDetail;

  const handlebest = () => {
    setBestSeller(!bestSeller);
  };

  const handleVeg = () => {
    setShowVeg(!showVeg);
  };

  const handleNonVeg = () => {
    setShowNonVeg(!showNonVeg);
  };

  const hanldeOffers = () => {
    setShowOffers(!showOffers);
  };

  const filters = { bestSeller, showVeg, showNonVeg, showOffers };

  const filteredCategories = MenuCards.filter((category) => {
    return usefilterMenu(category.card.card.itemCards, filters).length > 0;
  });

  return (
    <div className="resmenutop">
      <center>
        <div className="Top_details">
          <h2>{name}</h2>
          <p className="place">
            {city} - {areaName}
          </p>
          <p className="cuisines">{cuisines?.slice(0, 2).join(", ")}</p>
          <p>
            <b>
              {costForTwoMessage} ● ⭐{avgRating} ({totalRatingsString})
            </b>
          </p>
        </div>
        <div className="button_filter">
          <button
            type="button"
            className="bestSeller_button back"
            onClick={handleVeg}
          >
            <img
              style={{ height: "16px", width: "16px", marginRight: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png"
              alt="Veg"
            />
            Veg{showVeg && <div>✖</div>}
          </button>
          <button
            type="button"
            className="bestSeller_button back"
            onClick={handleNonVeg}
          >
            <img
              style={{ height: "16px", width: "16px", marginRight: "5px" }}
              src="https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg"
              alt="Non-Veg"
            />
            Non-Veg{showNonVeg && <div>✖</div>}
          </button>
          <button
            type="button"
            onClick={handlebest}
            className={`bestSeller_button ${bestSeller ? "active" : ""}`}
          >
            Bestseller{bestSeller && <div>✖</div>}
          </button>
          <button
            type="button"
            onClick={hanldeOffers}
            className={`bestSeller_button ${showOffers ? "active" : ""}`}
          >
            Offers {showOffers && <div>✖</div>}
          </button>
        </div>
        <div className="category_item">
          <ol style={{ listStyle: "none" }}>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => {
                const filteredItemsCount = category.card.card.itemCards.filter(
                  (item) => {
                    if (
                      showVeg &&
                      item?.card?.info?.itemAttribute?.vegClassifier !== "VEG"
                    ) {
                      return false;
                    }
                    if (
                      showNonVeg &&
                      item?.card?.info?.itemAttribute?.vegClassifier !==
                        "NONVEG"
                    ) {
                      return false;
                    }
                    if (
                      bestSeller &&
                      item?.card?.info?.ribbon?.text !== "Bestseller"
                    ) {
                      return false;
                    }
                    if (
                      showOffers &&
                      (!item?.card?.info?.offerTags ||
                        item?.card?.info?.offerTags.length === 0)
                    ) {
                      return false;
                    }
                    return true;
                  }
                ).length;
                return (
                  <li key={category.card.card.title}>
                    <MenuCategory
                      {...category}
                      filteredItemsCount={filteredItemsCount}
                      bestSeller={bestSeller}
                      showVeg={showVeg}
                      showNonVeg={showNonVeg}
                      showOffers={showOffers}
                      OpenList={index === OpenList} /*lifting the state up*/
                      setOpenList={() =>
                        setOpenList(index === OpenList ? null : index)
                      }
                    />
                  </li>
                );
              })
            ) : (
              <div className="category_name">
                <img
                  src="https://cdn.dribbble.com/users/760295/screenshots/4433975/media/03494b209a1511a61868ced337b97931.png?resize=400x300&vertical=center"
                  alt="NO RESULTS"
                />
              </div>
            )}
          </ol>
        </div>
      </center>
    </div>
  );
};

export default RestaurantMenu;
