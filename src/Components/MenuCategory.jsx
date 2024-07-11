import React from "react";
import MenuList from "./MenuList";

const MenuCategory = ({
  card,
  setOpenList,
  OpenList,
  showBest,
  filteredItemsCount,
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
      {OpenList && <MenuList {...card} setBest={showBest} />}
    </div>
  );
};

export default MenuCategory;
