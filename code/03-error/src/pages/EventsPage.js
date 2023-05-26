import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";
function EventsPage() {
	const db = useLoaderData();
	const events = db.events;
	return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export async function loader() {
	const response = await fetch("http://localhost:8080/events");
	if (!response.ok) {
		//throw { message: "일시적으로 오류가 발생하였습니다" };
		throw new Response(JSON.stingify({ message: "일시적으로 오류가 발생하였습니다", status: 500 ,}));
	} else {
		return response;
	}
}
