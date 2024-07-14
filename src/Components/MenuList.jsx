import React from "react";
import usefilterMenu from "../utils/usefilterMenu";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartSlice";

const MenuList = ({
  card = {},
  bestSeller,
  showVeg,
  showNonVeg,
  showOffers,
}) => {
  const filters = { bestSeller, showVeg, showNonVeg, showOffers };
  const filteredItems = usefilterMenu(card.itemCards || [], filters);
  const dispatch = useDispatch();
  const handleAdditem = (items) => {
    dispatch(additem(items));
  };
  return (
    <div className="menu-list">
      <ol>
        {filteredItems.map((c) => (
          <div key={c.card.info.id}>
            <li>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  {c?.card?.info?.itemAttribute?.vegClassifier &&
                  c.card.info.itemAttribute.vegClassifier === "NONVEG" ? (
                    <img
                      src="https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg"
                      alt="Non-Veg"
                    />
                  ) : (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png"
                      alt="Veg"
                    />
                  )}
                  <h4>{c.card.info.name}</h4>
                  <span className="price">
                    ₹
                    {Math.round(c.card.info.price / 100) ||
                      Math.round(c.card.info.defaultPrice / 100)}{" "}
                    {c.card.info.offerTags?.length > 0 && (
                      <span className="offer-tag">
                        {`${c.card.info.offerTags[0].title || ""}
                        ${c.card.info.offerTags[0].subTitle || ""}`}
                      </span>
                    )}
                  </span>
                </div>
                <p className="menu-item-description">
                  {c.card.info.ribbon?.text && (
                    <span className="best-seller">
                      {c.card.info.ribbon.text} <br />
                    </span>
                  )}

                  {c.card.info.ratings.aggregatedRating.rating && (
                    <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                      {`⭐${c.card.info.ratings.aggregatedRating.rating} (${c.card.info.ratings.aggregatedRating.ratingCountV2})`}
                      <br />
                    </span>
                  )}

                  {c.card.info.description}
                </p>
              </div>
              <div className="menu-item-image-wrapper">
                <img
                  className="menu-item-image"
                  src={`${process.env.REACT_APP_IMAGE_URL}${c.card.info.imageId}`}
                  alt="Menu item"
                  onError={(e) => {
                    e.target.onerror = null; // Prevents infinite loop in case the demo image also fails to load
                    e.target.src =
                      "https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
                  }}
                />

                <button className="Add_button" onClick={() => handleAdditem(c)}>
                  ADD +
                </button>
              </div>
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default MenuList;
