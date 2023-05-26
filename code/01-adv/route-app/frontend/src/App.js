import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GnbRoot, EventRoot } from './pages/Root';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import NewEventPage from './pages/NewEventPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <GnbRoot />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'events',
				element: <EventRoot />,
				children: [
					{ index: true, element: <EventsPage /> },
					{ path: ':id', element: <EventDetailPage /> },
					{ path: 'new', element: <NewEventPage /> },
					{ path: ':id/edit', element: <EditEventPage /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
