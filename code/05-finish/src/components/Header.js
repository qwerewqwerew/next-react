import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Header.module.css";

const Header = () => {
	const dispatch = useDispatch();
  const logoutFn = () => {
    dispatch(authActions.logout());
  };
	const isAuth = useSelector((state) => {
		return state.auth.isAuth;
	});
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
		</header>
	);
};

export default Header;
