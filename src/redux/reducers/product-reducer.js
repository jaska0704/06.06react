import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  count: 0,
  totalPrice:0,
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    totalPrice: (state) => {
        const count = state.products.reduce((a, b) => {
          return  a + b.userPrice;
        }, 0);
        return {...state, totalPrice:count}
    },
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
    remove: (state, action) => {},
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
      if (action.payload.type === "remove") {
        const newProducts = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * item.price,
            };
          }
          return item;
        });
        return { ...state, products: newProducts };
      }
    },
    deletStoreCard: (state, action) => {
      if (action.payload.type === "add") {
        return {
          ...state,
          products: state.products.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      }
    },
  },
});

export default product.reducer;
export const { add_product, remove, toggleAnmount, deletStoreCard, totalPrice } =
  product.actions;
