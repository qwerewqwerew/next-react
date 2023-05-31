import Head from "next/head";

import { MongoClient } from "mongodb";
import StudyList from "../components/studyViews/StudyList";

const Home = ({ studyInit }) => {
	return (
		<>
			<Head>
				<title>Next Study</title>
				<meta name="description" content="Nextjs로 만든 스터디앱" />
				<meta name="keyword" content="Nextjs,react" />
			</Head>
			<h1>Home</h1>
			<StudyList studys={studyInit} />
		</>
	);
};

export async function getStaticProps() {
	const client = await MongoClient.connect("mongodb+srv://admin:1234@study-cluster.q9t7mcx.mongodb.net/?retryWrites=true&w=majority");
	const db = client.db();
	const stydyCollection = db.collection("study");
	const result = await stydyCollection.find().toArray();
	client.close();
	return {
		props: {
			studyInit: result.map((item) => ({
				title: item.title,
				address: item.address,
				image: item.image,
				id: item._id.toString(),
			})),
		},
		revalidate: 10,
	};
}

export default Home;
