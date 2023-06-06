import { createSlice, configureStore } from "@reduxjs/toolkit";

const initState = { count: 0, showCount: true };

const countSlice = createSlice({
	name: "counter",
	initialState: initState,
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

const store = configureStore({
	reducer: countSlice.reducer,
});
export const countActions = countSlice.actions;
export default store;
