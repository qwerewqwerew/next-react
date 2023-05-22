import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import classes from "./Login.module.css";
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.value, isValid: action.value.includes("@") };
	}
	if (action.type === "USER_BLUR") {
		return { value: state.value, isValid: state.value.includes("@") };
	}
	return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.value, isValid: action.value.trim().length > 6 };
	}
	if (action.type === "USER_BLUR") {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: "", isValid: false };
};

const Login = () => {
	const ctx = useContext(AuthContext);
	const emailInputRef = useRef(null);
	const passwordInputRef = useRef(null);
	const [formIsValid, setFormIsValid] = useState(false);
	const [emailState, dispatchEmail] = useReducer(emailReducer, { value: "", isValid: null });
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: "", isValid: null });

	const emailChangeFn = (event) => {
		dispatchEmail({ type: "USER_INPUT", value: event.target.value });
		setFormIsValid(emailState.isValid && passwordState.isValid);
	};

	const passwordChangeFn = (event) => {
		dispatchPassword({ type: "USER_INPUT", value: event.target.value });
		setFormIsValid(emailState.isValid && passwordState.isValid);
	};

	const validateEmailFn = () => {
		dispatchEmail({ type: "USER_BLUR" });
	};

	const validatePasswordFn = () => {
		dispatchPassword({ type: "USER_BLUR" });
	};

	const submitFn = (event) => {
		event.preventDefault();
		if (formIsValid) {
			ctx.onLogin(emailState.value, passwordState.value);
		} else if (!emailIsValid) {
			emailInputRef.current.focus();
		} else {
			passwordInputRef.current.focus();
		}
	};
	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;

	useEffect(() => {
		const id = setTimeout(() => {
			setFormIsValid(emailState.value && passwordState.value);
		}, 500);
		return () => {
			clearTimeout(id);
		};
	}, [emailState, passwordState]);
	return (
		<Card className={classes.login}>
			<form onSubmit={submitFn}>
				{/* <input type="text" autoFocus/>
				<input type="text" tabIndex="1"/>
				<input type="text" />
				<input type="text" /> */}
				<div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ""}`}>
					<Input ref={emailInputRef} id='email' label='이메일' type='email' isValid={emailIsValid} value={emailState.value} onChange={emailChangeFn} onBlur={validateEmailFn} />
					<Input ref={passwordInputRef} id='password' label='비밀번호' type='password' isValid={passwordIsValid} value={passwordState.value} onChange={passwordChangeFn} onBlur={validatePasswordFn} />
				</div>
				<div className={classes.actions}>
					<Button type='submit' className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
