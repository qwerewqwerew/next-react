import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
	const params = useParams();
	console.log(params);
	return (
		<>
			<h1>EventDetailPage:{params.id}</h1>
		</>
	);
};
export default EventDetailPage;
