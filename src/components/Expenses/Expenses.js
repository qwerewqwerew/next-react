import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = ({ items }) => {
	const [filteredYear, setFilteredYear] = React.useState("2023");
	const changeYearFn = (year) => {
		setFilteredYear(year);
	};

	const filterYearFn = items.filter((item) => {
		//return item=true;
		console.log(item);
		return item.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onChangeYear={changeYearFn} />
				{filterYearFn.map((item) => {
					return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />;
				})}
			</Card>
		</div>
	);
};
export default Expenses;
