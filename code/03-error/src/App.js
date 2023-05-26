import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GnbRoot, EventRoot } from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventsPage, { loader } from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <GnbRoot />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "events",
				element: <EventRoot />,
				children: [
					{ index: true, element: <EventsPage />, loader: loader },
					{ path: ":id", element: <EventDetailPage /> },
					{ path: "new", element: <NewEventPage /> },
					{ path: ":id/edit", element: <EditEventPage /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
