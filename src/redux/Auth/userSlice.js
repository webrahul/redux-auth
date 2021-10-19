import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	currentUser: [],
	isLoggedIn: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			state.currentUser = action.payload;
			state.isLoggedIn = true;
		},
		logout: (state) => {
			state.currentUser = [];
			state.isLoggedIn = false;
		},
		register: (state, action) => {
			state.currentUser = action.payload;
			state.isLoggedIn = true;
		},
	},
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;