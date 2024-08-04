import React, { useContext, useEffect, useState } from "react";
import "../SCSS/Location.scss";
import axios from "axios";
import { CityLabel, LatandLng } from "../utils/ContextLocation";

const Location = ({ onClose }) => {
  const [cityValue, setCityvalue] = useState("");
  const [cityList, setCitylist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setCordinates } = useContext(LatandLng);
  const { setCityName } = useContext(CityLabel);

  const useDebounce = (value, delay) => {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
      const handle = setTimeout(() => {
        setDebounce(value);
      }, delay);

      return () => {
        clearTimeout(handle);
      };
    }, [value, delay]);

    return debounce;
  };

  const debounceCityValue = useDebounce(cityValue, 300);
  const fetchList = async (c) => {
    if (!c) {
      setCitylist([]);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${c}`
      );
      const data = response.data.data;
      setCitylist(data);
    } catch (error) {
      setError("Failed to fetch data. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList(debounceCityValue);
  }, [debounceCityValue]);

  const fetchLatandLong = async (id) => {
    const response = await axios.get(
      `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${id}`
    );
    const data = response.data;
    setCordinates({
      lat: data.data[0]?.geometry?.location?.lat,
      lng: data.data[0]?.geometry?.location?.lng,
    });
    setCityName(data.data[0]?.formatted_address);
  };

  fetchLatandLong();

  return (
    <div className="location-container">
      <button className="close-btn" onClick={onClose}>
        <i className="fa-regular fa-circle-xmark"></i>
      </button>
      <div className="white-layout">
        <input
          type="text"
          placeholder="Search for area, street name..."
          onChange={(e) => setCityvalue(e.target.value)}
          value={cityValue}
          style={{
            padding: "8px",
            width: "400px",

            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",

            marginTop: "40px",
          }}
        />
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        <div className="location-list">
          {cityList.length === 0 && <div>Search Location</div>}
          <ul>
            {cityList.map((e) => (
              <li
                key={e.place_id}
                onClick={() => fetchLatandLong(e.place_id)}
                style={{
                  borderBottom: "2px dotted #C7C8CC",
                  margin: "20px",
                  listStyle: "none",
                  width: "400px",
                }}
              >
                <span style={{ display: "flex", gap: "5px" }}>
                  <i class="fa-solid fa-location-dot"></i>
                  <h4>{e.structured_formatting.main_text}</h4>
                </span>
                <p>{e.structured_formatting.secondary_text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location;
