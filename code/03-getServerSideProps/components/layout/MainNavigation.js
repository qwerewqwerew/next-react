import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>망고의 스터디</div>
			<nav>
				<ul>
					<li>
						<Link href="/">모든 스터디</Link>
					</li>
					<li>
						<Link href="/new-meetup">스터디 등록</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
