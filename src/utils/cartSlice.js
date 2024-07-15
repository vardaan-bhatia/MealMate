import { createSlice } from "@reduxjs/toolkit";

// Function to load the state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Could not load state", e);
    return [];
  }
};

// Function to save the state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadState(),
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
      saveState(state.items);
    },

    removeitem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (index !== -1) {
        state.items.splice(index, 1);
        saveState(state.items);
      }
    },

    clearcart: (state) => {
      state.items = [];
      saveState(state.items);
    },
  },
});

export default cartSlice.reducer;
export const { additem, removeitem, clearcart } = cartSlice.actions;
