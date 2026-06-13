import { createSlice } from "@reduxjs/toolkit";

const storedWishlist =
  localStorage.getItem("wishlist");

const initialState = {
  wishlistItems: storedWishlist
    ? JSON.parse(storedWishlist)
    : [],
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {

    addToWishlist: (state, action) => {

      const existingProduct =
        state.wishlistItems.find(
          (item) => item.id === action.payload.id
        );

      if (!existingProduct) {

        state.wishlistItems.push(action.payload);

        localStorage.setItem(
          "wishlist",
          JSON.stringify(state.wishlistItems)
        );
      }
    },

    removeFromWishlist: (state, action) => {

      state.wishlistItems =
        state.wishlistItems.filter(
          (item) => item.id !== action.payload
        );

      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.wishlistItems)
      );
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;