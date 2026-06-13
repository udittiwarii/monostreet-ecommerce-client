import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    setCart: (state, action) => {
      state.cartItems = action.payload;
    },

    clearCartState: (state) => {
      state.cartItems = [];
    },

    setCartLoading: (state, action) => {
      state.loading = action.payload;
    },

    setCartError: (state, action) => {
      state.error = action.payload;
    },

    // Optional local update
    updateQuantity: (state, action) => {

      const {
        productId,
        quantity,
      } = action.payload;

      const item =
        state.cartItems.find(
          (item) =>
            item.productId === productId
        );

      if (item) {
        item.quantity = quantity;
      }
    },

    // Optional local remove
    removeFromCart: (
      state,
      action
    ) => {

      state.cartItems =
        state.cartItems.filter(
          (item) =>
            item.productId !==
            action.payload
        );
    },
  },
});

export const {
  setCart,
  clearCartState,
  setCartLoading,
  setCartError,
  updateQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;