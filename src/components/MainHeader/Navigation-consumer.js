import React from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../storage/auth-context";
const Navigation = (props) => {
	return (
		<AuthContext.Consumer>
			{(ctx) => {
        console.log(ctx);
				return (
					<nav className={classes.nav}>
						<ul>
							{ctx.isLoggedIn && (
								<li>
									<a href="/">회원</a>
								</li>
							)}
							{ctx.isLoggedIn && (
								<li>
									<a href="/">관리자</a>
								</li>
							)}
							{ctx.isLoggedIn && (
								<li>
									<button onClick={ctx.onLogout}>로그아웃</button>
								</li>
							)}
						</ul>
					</nav>
				);
			}}
		</AuthContext.Consumer>
	);
};

export default Navigation;
