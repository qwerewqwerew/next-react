import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import EventsNavigation from "../components/EventsNavigation";

const GnbRoot = () => {
	const navi = useNavigation();
	//console.log("나좀봐",navi);
	return (
		<>
			<MainNavigation />
			<main>
				{navi.state === "loading" && <h2>영차영차...</h2>}
				<Outlet />
			</main>
		</>
	);
};

const EventRoot = () => {
	return (
		<>
			<EventsNavigation />
			<Outlet />
		</>
	);
};

export { GnbRoot, EventRoot };
