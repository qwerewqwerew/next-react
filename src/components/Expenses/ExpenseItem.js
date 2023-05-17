import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
	let title = props.title;
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<h2>변경:{title}</h2>
				<div className='expense-item__price'>₩{props.amount}</div>
			</div>
		</Card>
	);
}
export default ExpenseItem;
