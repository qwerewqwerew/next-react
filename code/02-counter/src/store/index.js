import { createStore } from "redux";

const initState = { count: 0, showCount: true };

const countReducer = (state = initState, action) => {
	if (action.type === "increment") {
		console.log(state);
		return { count: state.count + 1, showCount: state.showCount };
	}
	if (action.type === "increment5") {
		return { count: state.count + action.amount, showCount: state.showCount };
	}
	if (action.type === "decrement") {
		return { count: state.count - 1, showCount: state.showCount };
	}
	if (action.type === "toggle") {
		return { count: state.count, showCount: !state.showCount };
	}
	return state;
};
const store = createStore(countReducer);
export default store;
