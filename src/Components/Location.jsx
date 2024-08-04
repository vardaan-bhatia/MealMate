import React, { useContext, useEffect, useState } from "react";
import "../CSS/Location.css";
import axios from "axios";
import { LatandLng } from "../utils/ContextLocation";

const Location = ({ onClose }) => {
  const [cityValue, setCityvalue] = useState("");
  const [cityList, setCitylist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setCordinates } = useContext(LatandLng);

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
    console.log(data.data[0]?.formatted_address);
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
            width: "290px",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        />
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        <div className="location-list">
          <ul>
            {cityList.map((e) => (
              <li key={e.place_id} onClick={() => fetchLatandLong(e.place_id)}>
                <h4>{e.structured_formatting.main_text}</h4>
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
