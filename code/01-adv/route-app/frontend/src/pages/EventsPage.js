import {Link} from 'react-router-dom';
const DUMMY_DB = [
	{ id: '1', title: 'event1' },
	{ id: '2', title: 'event2' },
	{ id: '3', title: 'event3' },
	{ id: '4', title: 'event4' },
	{ id: '5', title: 'event5' },
];
const EventsPage = () => {
	return (
		<>
			<h1>EventsPage</h1>
			<ul>
				{DUMMY_DB.map((item) => {
					return <li key={item.id}><Link to={item.id}>{item.title}</Link></li>;
				})}
			</ul>
		</>
	);
};
export default EventsPage;
