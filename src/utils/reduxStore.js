import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const reduxstore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default reduxstore;
