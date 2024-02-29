import { configureStore, createListenerMiddleware , isAnyOf} from "@reduxjs/toolkit";
import productReducer, { toggleAnmount, add_product, remove, totalPrice } from "./reducers/product-reducer";


const storageMiddleware = createListenerMiddleware()

storageMiddleware.startListening({
    matcher: isAnyOf(add_product,remove,toggleAnmount),
    effect:(_, apin)=> {
        apin.dispatch(totalPrice())
    },
})

export const store = configureStore({
    reducer: {
        productReducer,
    },
    middleware:(defauldMiddlware) => 
        defauldMiddlware().prepend(storageMiddleware.middleware)
})