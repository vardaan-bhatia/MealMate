import React from "react";

const MenuList = ({ card }) => {
  return (
    <div className="menu-list">
      <ol>
        {card.itemCards.map((c) => (
          <div key={c.card.info.id}>
            <li>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  {c.card.info.itemAttribute.vegClassifier === "NONVEG" ? (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/768px-Non_veg_symbol.svg.png"
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
                      Math.round(c.card.info.defaultPrice / 100)}
                  </span>
                </div>
                <p className="menu-item-description">
                  {c.card.info.ribbon?.text && (
                    <span className="best-seller">
                      {c.card.info.ribbon.text} <br />
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

                <button className="Add_button">ADD +</button>
              </div>
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default MenuList;
