import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
	const selectYear = (e) => {		
		props.onChangeYear(e.target.value);
	};
	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>연도별</label>
				<select value={props.selected} onChange={selectYear}>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
