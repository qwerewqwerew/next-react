const redux = require("redux");

//console.log(redux);
const reducer = (state = { count: 0 }, action) => {
	//console.log("start:", state.count);
	if (action.type === "start") {
		return { count: state.count };
	}
	if (action.type === "increment") {
		return { count: state.count + 1 };
	}
	if (action.type === "decrement") {
		return { count: state.count - 1 };
	}
	return state;
};

const store = redux.createStore(reducer);
//onsole.log("store", store.getState());

const subscriber = () => {
	const lastestState = store.getState();
	console.log("최종상태", lastestState);
};
store.subscribe(subscriber);
store.dispatch({ type: "increment" });
store.dispatch({ type: "start" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "plus" });
