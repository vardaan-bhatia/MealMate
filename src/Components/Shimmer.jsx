import React, { useEffect, useState } from "react";
import "../CSS/Feed.scss";

const Shimmer = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return loading ? (
    <div className="shimmer-container">
      {[...Array(10)].map((e, index) => (
        <div className="shimmerUI" key={index}></div>
      ))}
    </div>
  ) : (
    <div className="center-container">
      <img
        src="https://cdn.dribbble.com/users/760295/screenshots/4433975/media/03494b209a1511a61868ced337b97931.png?resize=400x300&vertical=center"
        alt="NO RESULTS"
      />{" "}
      <p className="empty-cart-text">
        As no search results found you can refresh the page to explore other
        restaurants
      </p>
      <button
        type="button"
        className="empty-cart-button"
        onClick={handleRefresh}
      >
        Click here to Refresh !
      </button>
    </div>
  );
};

export default Shimmer;
