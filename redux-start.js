const redux = require("redux");
//let state = { count: 0 };
const countReducer = (state = { count: 0 }, action) => {
	if (action.type === "increment") {
		return {
			count: state.count + 1,
		};
	}
	if (action.type === "decrement") {
		return {
			count: state.count - 1,
		};
	}
	return state;
};
const store = redux.createStore(countReducer);
//console.log("store.getState", store.getState());
const countSubscriber = () => {
	const latestState = store.getState();
	console.log("latestState", latestState);
};

store.subscribe(countSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
