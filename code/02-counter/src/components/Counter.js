import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const show = useSelector((state) => {
		return state.showCount;
	});
	const count = useSelector((state) => {
		return state.count;
	});
	const increment = () => {
		dispatch({ type: "increment" });
	};
	const increment5 = () => {
		dispatch({ type: "increment5", amount: 5 });
	};
	const decrement = () => {
		dispatch({ type: "decrement" });
	};
	const toggleCountFn = () => {
		dispatch({ type: "toggle", showCount:false });
	};

	return (
		<main className={classes.counter}>
			<h1>좋아요❤❤</h1>
			<div className={classes.card}>
				<div className={classes.image}></div>
				<div className={classes.value}>받은 ❤ 개수</div>
			</div>
			{show && <h2>{count}</h2>}
			<div className={classes.button}>
				<button onClick={increment}>❤주기</button>
				<button onClick={increment5}>❤왕창주기</button>
				<button onClick={decrement}>❤빼기</button>
			</div>
			<button onClick={toggleCountFn}>❤ 보내기</button>
		</main>
	);
};

export default Counter;
