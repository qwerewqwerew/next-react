import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'products', element: <Products /> },
			{ path: 'products/:id', element: <ProductDetail /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
