import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";
function EventsPage() {
	const db = useLoaderData();
	return <>{<EventsList events={db} />}</>;
}

export default EventsPage;

export async function loader() {
	const response = await fetch("http://localhost:8080/events");
	if (!response.ok) {
		console.log(!response.ok);
	} else {
		const resData = await response.json();
		console.log(resData);
		return resData.events;
	}
}
