import { Link } from "react-router-dom";
const PRODUCTS = [
	{ id: "1", title: "상품1" },
	{ id: "2", title: "상품2" },
	{ id: "3", title: "상품3" },
];
const Products = () => {
	return (
		<>
			<h1>Products</h1>
			<ul>
				{PRODUCTS.map((item) => {
          console.log(item);
					return (
						<li key={item.id}>
							<Link to={item.id}>{item.title}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};
export default Products;
