import { useSelector, useDispatch } from "react-redux";
import { countActions } from "../store/index";
import classes from "./Counter.module.css";
const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => {
		console.log(state);
		return state.count.count;
	});
	const show = useSelector((state) => {
		return state.count.showCount;
	});
	const toggleCountFn = () => {
		//dispatch({ type: "toggle" });
		dispatch(countActions.toggle());
	};

	const increment = () => {
		//dispatch({ type: "increment" });
		dispatch(countActions.increment());
	};
	const increment5 = () => {
		//dispatch({ type: "increment5", payload: 5 });
		dispatch(countActions.increment5(5));
	};
	const decrement = () => {
		//dispatch({ type: "decrement" });
		dispatch(countActions.decrement());
	};

	return (
		<main className={classes.counter}>
			<h1>좋아요 개수</h1>
			<div className={classes.card}>
				<div className={classes.image}></div>
				<div className={classes.value}>받은 하트 개수 {count}</div>
			</div>
			{show && (
				<div className={classes.button}>
					<button onClick={increment}>하트 주기</button>
					<button onClick={increment5}>하트 왕창 주기</button>
					<button onClick={decrement}>하트 뺏기</button>
				</div>
			)}
			<button onClick={toggleCountFn}>{show ? "취소" : "하트보내기"}</button>
		</main>
	);
};

export default Counter;
