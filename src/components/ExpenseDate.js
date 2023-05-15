import React from "react";
import "./ExpenceDate.css";
const ExpenseDate = (props) => {
  const month = props.date.getMonth().toString().padStart(2,"0");
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month == 0 ? "12" : month}월</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  )
}
export default ExpenseDate;