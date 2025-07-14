import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartitem: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            state.cartitem.push({ ...item });
        },
        removeFromCart: (state, action) => {

            const id = action.payload;
            state.cartitem = state.cartitem.filter(i => i.id !== id);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;