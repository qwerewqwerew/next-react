import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
const Expenses = ({ items }) => {
	const [filteredYear, setFilteredYear] = React.useState("2023");
	const changeYearFn = (year) => {
		setFilteredYear(year);
	};
	const filterYearFn = items.filter((item) => {
		return item.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onChangeYear={changeYearFn} />
				<ExpenseChart expenses={filterYearFn} />
				<ExpenseList items={filterYearFn} />
			</Card>
		</div>
	);
};
export default Expenses;
