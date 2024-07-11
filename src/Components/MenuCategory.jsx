import React from "react";
import MenuList from "./MenuList";

const MenuCategory = ({ card, setOpenList, OpenList }) => {
  const handleClick = () => {
    setOpenList();
  };

  return (
    <div className="category_name">
      <h3 onClick={handleClick}>
        {card.card.title} ({card.card.itemCards.length}){" "}
        <span className={`icon ${OpenList ? "open" : ""}`}>▼</span>
      </h3>
      {OpenList && <MenuList {...card} />}
    </div>
  );
};

export default MenuCategory;
