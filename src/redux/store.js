import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/product-reducer";


export const store = configureStore({
    reducer: {
        productReducer,
    }
})