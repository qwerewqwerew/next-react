<<<<<<< HEAD
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
=======
import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const STUDY_DB = [
	{ id: "m1", title: "그림1", image: "http://qwerew.cafe24.com/images/1.jpg", address: "서울시 강남구 스벅", description: "첫번째 만남" },
	{ id: "m2", title: "그림2", image: "http://qwerew.cafe24.com/images/2.jpg", address: "서울시 강남구 스벅", description: "두번째 만남" },
	{ id: "m3", title: "그림3", image: "http://qwerew.cafe24.com/images/3.jpg", address: "경기 성남시 스벅", description: "세번째 만남" },
];

const Home = (props) => {
	return (
		<>
			<Head>
				<title>Next Study</title>
				<meta name="description" content="Nextjs로 만든 스터디앱" />
			</Head>
			<MeetupList meetups={props.meetups} />;
		</>
	);
};
export async function getStaticProps() {
	const client = await MongoClient.connect("mongodb+srv://admin:1234@cluster0.koxhosh.mongodb.net/study?retryWrites=true&w=majority");
	const db = client.db();
	const stydyCollection = db.collection("study");
	const meetups = await stydyCollection.find().toArray();
	client.close();
	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 3600,
	};
}

>>>>>>> eee6c5e896dc61733d800308db6deb55638093f3
export default Home;
