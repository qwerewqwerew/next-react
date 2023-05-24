import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

/* function Timer() {
  console.log("타이머 실행 전");
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 진행");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머 종료");
    };
  });
  return <p>타이머 진행 중</p>;
}
 */
/* const reducer = (state, action) => {
  console.log("WORK reducder", state, action);
  if (action.type == "WORK") {
    return { type: "WORK", payload: "리액트", state: "1" }
  } else { return { type: '' } }
}
 */
const reducerEmail = (state, action) => {
  if (action.type === "USER_INPUT") { return { value: action.value, isValid: action.value.includes("@") } }
  if (action.type === "USER_BLUR") { return { value: state.value, isValid: state.value.includes("@") } }
  return { value: '', isValid: false }
}
const reducerPassWord = (state, action) => {
  if (action.type === "USER_INPUT") { return { value: action.value, isValid: action.value.trim().length > 6 } }
  if (action.type === "USER_BLUR") { return { value: state.value, isValid: state.value.trim().length > 6 } }
  return { value: '', isValid: false }
}

const Login = (props) => {
  // const [state, dispatch] = useReducer(reducer, 0)

  const [stateEmail, dispatchEmail] = useReducer(reducerEmail, { value: '', isValid: null })
  const [statePassWord, dispatchPassWord] = useReducer(reducerPassWord, { value: '', isValid: null })
  const [formIsValid, setFormIsValid] = useState(false);
  const { isValid: isValidEmail } = stateEmail;
  const { isValid: isValidPassWord } = statePassWord;

  useEffect(() => {
    const id = setTimeout(() => {
      console.log("유효성검증완료");
      setFormIsValid(isValidEmail && isValidPassWord)
    },
      500)
    return () => {
      console.log('끝');
      clearTimeout(id);
    };
  }, [isValidEmail, isValidPassWord])

  const emailChangeFn = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };
  const passwordChangeFn = (event) => {
    dispatchPassWord({ type: "USER_INPUT", value: event.target.value });
  };

  const validateEmailFn = () => {
    dispatchEmail({ type: "USER_BLUR" });
  };

  const validatePasswordFn = () => {
    dispatchPassWord({ type: "USER_BLUR" });
  };

  const submitFn = (event) => {
    event.preventDefault();
    props.onLogin(stateEmail.value, statePassWord.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitFn}>
        <div className={`${classes.control} ${stateEmail.isValid === false ? classes.invalid : ''}`}>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" value={stateEmail.value} onChange={emailChangeFn} onBlur={validateEmailFn} />
        </div>
        <div className={`${classes.control} ${statePassWord.isValid === false ? classes.invalid : ''}`}>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" value={statePassWord.value} onChange={passwordChangeFn} onBlur={validatePasswordFn} />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            로그인
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
