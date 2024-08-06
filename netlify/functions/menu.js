import axios from "axios";

export const handler = async (event) => {
  const { lat, lng, resid } = event.queryStringParameters;

  console.log("Fetching menu with:", { lat, lng, resid });

  try {
    const response = await axios.get(
      `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resid}`
    );
    console.log("Menu fetched successfully");
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching menu:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
