import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  count: 0,
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    add_product: (state, action) => {
      const bill = state.products.find((item) => item.id === action.payload.id);
      if (!bill) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: action.payload.price,
            },
          ],
        };
      }
      return state;
    },
    remove: () => {},
    toggleAnmount: (state, action) => {
      if (action.payload.type === "add") {
        const newProducts = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.userCount + 1) * item.price,
            };
          }
          return item;
        });
         return { ...state, products: newProducts };
      }
    },
    deletStoreCard: (state, action) => {
      if (action.payload.type === "add") {
        const newdeletProducts = state.products.filter((item) => {
          return item.id != action.payload.id;
        });
        return { ...state, products: newdeletProducts };
      }
    },
  },
});

export default product.reducer;
export const { add_product, remove, toggleAnmount, deletStoreCard } =
  product.actions;
