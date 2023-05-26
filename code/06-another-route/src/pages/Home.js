import { Link, useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const navigateFn = () => {
		navigate("products");
	};
	return (
		<div>
			<h1>Home</h1>
			<div>
				<Link to="products">Products</Link>
			</div>
			<div>
				<button onClick={navigateFn}>클릭</button>
			</div>
		</div>
	);
};
export default Home;
