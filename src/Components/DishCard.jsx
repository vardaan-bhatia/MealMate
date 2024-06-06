import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dishCategories = [
  "Chinese",
  "Indian",
  "Italian",
  "Mexican",
  "Thai",
  "Rasgulla",
  "Pizza",
  "Burger",
  "Pav Bhaji",
  "Pasta",
  "Tacos",
  "Sushi",
];

const DishCard = () => {
  return (
    <div className="feedtop">
      <div className="Mindtop">
        <h1 className="mindh1">What's on your mind?</h1>
        <div className="round-container">
          {dishCategories.map((category, index) => (
            <div className="round-pair" key={index}>
              <div className="round"></div>
              <p>{category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DishCard;
