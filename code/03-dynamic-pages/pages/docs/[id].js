import { useRouter } from "next/router";

//http://localhost:3000/docs/detail

const Detail = () => {
	const router=useRouter();
	console.log(router);
	console.log(router.query.id);	
	return (
		<>
			<h1>Detail</h1>
			<h2>❗{router.query.id}</h2>
		</>
	);
};
export default Detail;
