import { createSlice } from "@reduxjs/toolkit";
const countInitState = { count: 0, showCount: true };

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
export const countActions = countSlice.actions;
export default countSlice.reducer;
