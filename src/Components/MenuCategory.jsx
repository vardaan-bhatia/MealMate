import React from "react";
import MenuList from "./MenuList";

const MenuCategory = ({
  card,
  setOpenList,
  OpenList,
  bestSeller,
  filteredItemsCount,
  showVeg,
  showOffers,
  showNonVeg,
}) => {
  const handleClick = () => {
    setOpenList();
  };
  return (
    <div className="category_name">
      <h3 onClick={handleClick}>
        {card.card.title} ({filteredItemsCount})
        <span className={`icon ${OpenList ? "open" : ""}`}>▼</span>
      </h3>
      {OpenList && (
        <MenuList
          {...card}
          bestSeller={bestSeller}
          showVeg={showVeg}
          showNonVeg={showNonVeg}
          showOffers={showOffers}
        />
      )}
    </div>
  );
};

export default MenuCategory;
