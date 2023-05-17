import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = ({ items }) => {
	const [filteredYear, setFilteredYear] = React.useState("2023");
	const changeYearFn = (year) => {
		console.log("Expense", year);
		setFilteredYear(year);
	};
	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onChangeYear={changeYearFn} />
				{items.map((item) => {
					return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />;
				})}
			</Card>
		</div>
	);
};
export default Expenses;
