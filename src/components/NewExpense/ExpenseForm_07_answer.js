import "./ExpenseForm.css";
import {useState} from "react";
const ExpenseForm = () => {
  let [ userInput, setUserInput ] = useState({
    inputTitle: '', inputNum: 0, inputDate: ''
  });

  const titleChangeHandler = (e) => {
    setUserInput((prev) => {return ({...prev, inputTitle: e.target.value})})
  };
  const numChangeHandler = (e) => {
    setUserInput((prev) => {return ({...prev, inputNum: e.target.value})})
  };
  const dateChangeHandler = (e) => {
    setUserInput((prev) => {return ({...prev, inputDate: e.target.value})})
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInput);
    setUserInput({inputTitle: '', inputNum: 0, inputDate: ''});
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control"><label>제목</label><input type="text" onChange={titleChangeHandler} value={userInput.inputTitle} /></div>
          <div className="new-expense__control"><label>금액</label><input type="number" min="0" step="100" value={userInput.inputNum} onChange={numChangeHandler} /></div>
          <div className="new-expense__control"><label>날짜</label><input type="date" min="2020-01-01" max="2023-12-31" value={userInput.inputDate} onChange={dateChangeHandler} /></div>
        </div>
        <div className="new-expense__action"><button type="submit">추가하기</button></div>
      </form>
    </div>
  )
}
export default ExpenseForm;