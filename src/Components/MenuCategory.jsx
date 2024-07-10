import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuCategory = ({ card }) => {
  const [OpenList, setOpenList] = useState(false);

  const handleClick = () => {
    setOpenList(!OpenList);
  };

  return (
    <div className="category_name">
      <h3 onClick={handleClick}>
        {card.card.title} ({card.card.itemCards.length}){" "}
        <span className={`icon ${OpenList ? "open" : ""}`}>▼</span>
      </h3>
      <div className={`menu_list ${OpenList ? "open" : ""}`}>
        <MenuList {...card} />
      </div>
    </div>
  );
};

export default MenuCategory;
