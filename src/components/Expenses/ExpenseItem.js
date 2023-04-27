import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
	const clickHandler = () => { console.log("야호"); }
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">₩{props.amount}</div>
			</div>
			<button onClick={clickHandler}>내용변경</button>
		</Card>
	);
}

export default ExpenseItem;
