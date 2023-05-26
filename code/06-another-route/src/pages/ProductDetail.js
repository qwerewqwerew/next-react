import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
	const params = useParams();
	return (
		<div>
			<h1>ProductDetail</h1>
			<div>{params.id}</div>
			<div><Link to=".." relative="path">Back</Link></div>
		</div>
	);
};
export default ProductDetail;
