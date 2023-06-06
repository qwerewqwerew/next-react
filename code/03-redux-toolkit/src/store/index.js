import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initState = {
	count: 0,
	showCount: true,
};

const countSlice = createSlice({
	name: "count",
	initialState: initState,
	reducers: {
		increment(state) {
			state.count++;
		},
		increment5(state, action) {
			state.count = state.count + action.payload;
		},
		decrement(state) {
			state.count--;
		},
		toggle(state) {
			state.showCount = !state.showCount;
		},
	},
});

/*
const countReducer = (state = initState, action) => {
	if (action.type === "increment") {
		return { count: state.count + 1, showCount: state.showCount };
	}
	if (action.type === "increment5") {
		return { count: state.count + action.payload, showCount: state.showCount };
	}
	if (action.type === "decrement") {
		return { count: state.count - 1, showCount: state.showCount };
	}
	if (action.type === "toggle") {
		return { count: state.count, showCount: !state.showCount };
	}
	return state;
};
*/
const store = configureStore({ reducer: countSlice.reducer });
export const countActions = countSlice.actions;
export default store;
