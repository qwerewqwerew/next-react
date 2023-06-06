import classes from "./Counter.module.css";

const Counter = () => {
	const toggleCountFn = () => {};

	return (
		<main className={classes.counter}>
			<h1>좋아요 개수</h1>
			<div className={classes.card}>
				<div className={classes.image}></div>
				<div className={classes.value}>받은 하트 개수</div>
			</div>
			<button onClick={toggleCountFn}>하트 보내기</button>
		</main>
	);
};

export default Counter;
