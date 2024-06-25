import axios from "axios";

const fetchCard = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchCard;
