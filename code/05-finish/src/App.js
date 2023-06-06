import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
	const isAuth = useSelector((state) => {
		console.log(state);
		return state.auth.isAuth;
	});
	return (
		<>
			<Header />
			{!isAuth && <Auth />}
			{isAuth && <UserProfile />}
			<Counter />
		</>
	);
}

export default App;