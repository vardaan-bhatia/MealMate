import React, { useState } from "react";
import "../CSS/RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const { ResDetail, MenuCards, loading } = useRestaurantMenu(resid);
  const [OpenList, setOpenList] = useState(0);
  const [bestSeller, setBestSeller] = useState(false);

  if (loading) {
    return <Shimmer />;
  }
  if (!ResDetail) {
    return <div>Error loading restaurant details</div>; // we have used this beacuse destructring used before the api call and return data even there is no data either we can use ResDetail.name and etc something like that  for everytime
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

  const filterCategory = bestSeller
    ? MenuCards.filter((e) =>
        (e?.card?.card?.itemCards).some(
          (c) => c.card.info.ribbon?.text === "Bestseller"
        )
      )
    : MenuCards;

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
          <button type="button" className={`bestSeller_button`}>
            <img
              style={{ height: "20px", width: "20px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png"
              alt="Veg"
            />
            Veg
          </button>
          <button type="button" className={`bestSeller_button`}>
            <img
              style={{ height: "20px", width: "20px" }}
              src="https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg"
              alt="Non-Veg"
            />
            Non-Veg
          </button>
          <button
            type="button"
            onClick={handlebest}
            className={`bestSeller_button ${bestSeller ? "active" : ""}`}
          >
            Bestseller{bestSeller && <div>✖</div>}
          </button>
        </div>
        <div className="category_item">
          <ol style={{ listStyle: "none" }}>
            {filterCategory.map((category, index) => {
              const filteredItemsCount = category.card.card.itemCards.filter(
                (e) => !bestSeller || e.card.info.ribbon.text === "Bestseller"
              ).length;
              return (
                <li key={category.card.card.title}>
                  <MenuCategory
                    {...category}
                    OpenList={index === OpenList}
                    filteredItemsCount={filteredItemsCount}
                    showBest={bestSeller}
                    /*we can use true but as we using the prop in the child with && condition so there is no need as we the clicked index value is equal to the prev state value then only it open or not  and if value of clicked index is same it state change to null which means null is not eqaul to index so it will close automatically*/
                    setOpenList={() =>
                      setOpenList(index === OpenList ? null : index)
                    }
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </center>
    </div>
  );
};

export default RestaurantMenu;
