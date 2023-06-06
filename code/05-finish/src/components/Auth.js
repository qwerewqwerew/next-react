import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { useRef } from "react";

const Auth = () => {
	const email = useRef();
	const password = useRef();
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => {
		return state.auth.isAuth;
	});
	const loginFn = () => {
		dispatch(authActions.login());
	};
	const validationFn = (e) => {
		e.preventDefault(); // 기본 동작 방지

		const emailValue = email.current.value.trim();
		const passwordValue = password.current.value.trim();

		if (emailValue === "" || passwordValue === "") {
			alert("입력 형식을 확인해주세요"); // 입력값이 비어 있을 경우 경고창 표시
		} else {
			loginFn();
		}
	};

	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={validationFn}>
					<div className={classes.control}>
						<label htmlFor="email">이메일</label>
						<input ref={email} type="email" id="email" />
					</div>
					<div className={classes.control}>
						<label htmlFor="password">비밀번호</label>
						<input ref={password} type="password" id="password" />
					</div>
					{isAuth && <button>로그아웃</button>}
					{!isAuth && <button>로그인</button>}
				</form>
			</section>
		</main>
	);
};

export default Auth;
