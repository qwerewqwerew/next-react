import { createSlice, configureStore } from "@reduxjs/toolkit";

const countInitState = { count: 0, showCount: true };
const authInitState = { isAuth: false };

const countSlice = createSlice({
	name: "count",
	initialState: countInitState,
	reducers: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		},
		increment5(state, action) {
			state.count = state.count + action.payload;
		},
		toggle(state) {
			console.log(state);
			state.showCount = !state.showCount;
		},
	},
});
const authSlice = createSlice({
	name: "auth",
	initialState: authInitState,
	reducers: {
		login(state) {
			state.isAuth = true;
		},
		logout(state) {
			state.isAuth = false;
		},
	},
});
const store = configureStore({
	reducer: { count: countSlice.reducer, auth: authSlice.reducer },
});
export const countActions = countSlice.actions;
export const authActions = authSlice.actions;
export default store;
