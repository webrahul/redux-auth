import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cart.push(action.payload);
		},
	},
});

export const { addToCart } = cartSlice.actions;
export const cartItems = (state) => state.cart.cart;
export default cartSlice.reducer;
