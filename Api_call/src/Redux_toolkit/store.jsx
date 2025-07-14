import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Redux_toolkit/productSlice';
import cartReducer from '../Redux_toolkit/cartSlice';

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
    },
});