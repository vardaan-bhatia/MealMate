import React, { useEffect, useState } from "react";
import "../CSS/Feed.css";

const Shimmer = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="shimmer-container">
      {[...Array(10)].map((e, index) => (
        <div className="shimmerUI" key={index}></div>
      ))}
    </div>
  ) : (
    <div style={{ marginTop: "80px" }}>
      <center>
        <img
          src="https://cdn.dribbble.com/users/760295/screenshots/4433975/media/03494b209a1511a61868ced337b97931.png?resize=400x300&vertical=center"
          alt="NO RESULTS"
        />
        <h1>
          CLICK THE LOGO TO <span style={{ color: "#fc9037" }}>REFRESH</span>{" "}
          THE PAGE !
        </h1>
      </center>
    </div>
  );
};

export default Shimmer;
