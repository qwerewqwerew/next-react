import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import EventsNavigation from '../components/EventsNavigation';


const GnbRoot = () => {
	return (
		<>
			<MainNavigation />
			<Outlet />
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
