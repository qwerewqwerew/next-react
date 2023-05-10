import "./ExpenseForm.css";
import {useState} from "react";
const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({inputTitle: '', inputNum: 0, inputDate: ''})

  const titleChangeHandler = (e) => {
    setUserInput({...userInput, inputTitle: e.target.value})
  };
  const numChangeHandler = (e) => {
    setUserInput({...userInput, inputNum: e.target.value})
  };
  const dateChangeHandler = (e) => {
    setUserInput({...userInput, inputDate: e.target.value})
  };
  const submitHandler = () => {return (  )}

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control"><label>제목</label><input type="text" onChange={titleChangeHandler} /></div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control"><label>금액</label><input type="number" min="0" step="100" onChange={numChangeHandler} /></div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control"><label>날짜</label><input type="date" min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler} /></div>
        </div>
        <div className="new-expense__action"><button type="submit">추가하기</button></div>
      </form>
    </div>
  )
}
export default ExpenseForm;