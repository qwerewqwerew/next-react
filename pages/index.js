import Link from "next/link";
//mango.com/

const Home = () => {
	return (
		<>
			<h1>Home</h1>
			<ul>
				<li><Link href="/docs/menu1">menu1</Link></li>
				<li><Link href="/docs/menu2">menu2</Link></li>
			</ul>
		</>
	);
};
export default Home;
