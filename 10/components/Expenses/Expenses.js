import React from "react";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
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
				<ExpenseList items={filterYearFn} />
			</Card>
		</div>
	);
};
export default Expenses;
