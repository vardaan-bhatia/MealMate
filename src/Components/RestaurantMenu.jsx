import React from "react";
import "../CSS/RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const { ResDetail, MenuCards, loading } = useRestaurantMenu(resid);

  if (loading) {
    return <Shimmer />;
  }
  if (!ResDetail) {
    return <div>Error loading restaurant details.</div>; // we have used this beacuse destructring used before the api call and return data even there is no data either we can use ResDetail.name and etc something like that  for everytime
  }
  const { name, city, costForTwoMessage, totalRatingsString, cuisines } =
    ResDetail;

  return (
    <div className="resmenutop">
      <div>
        <h1>{name}</h1>
        <p>{city}</p>
        <p>{cuisines?.slice(0, 2).join(", ")}</p>
        <p>
          <b>
            {costForTwoMessage} ● {totalRatingsString}
          </b>
        </p>
        <ol style={{ listStyle: "none" }}>
          {MenuCards.flatMap((category) =>
            category.card.card.itemCards.map((item) => (
              <li key={item.card.info.id}>
                <h3>{item.card.info.name}</h3>
                <p>Price: ₹{Math.round(item.card.info.price / 100)}</p>
              </li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
};

export default RestaurantMenu;
