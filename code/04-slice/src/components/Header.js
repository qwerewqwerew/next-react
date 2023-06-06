import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/index";
import classes from "./Header.module.css";

const Header = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => {
		return state.auth.isAuth;
	});
	const logoutFn = () => {
		dispatch(authActions.logout());
	};
	return (
		<header className={classes.header}>
			<h1>리덕스</h1>
			{isAuth && (
				<nav>
					<ul>
						<li>
							<a href="/">보유 하트</a>
						</li>
						<li>
							<a href="/">내 정보</a>
						</li>
						<li>
							<button onClick={logoutFn}>로그아웃</button>
						</li>
					</ul>
				</nav>
			)}
			{!isAuth && (
				<nav>
					<ul>
						<li>
							<button>로그인</button>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
