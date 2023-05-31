import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import { useRouter } from "next/router";
import StudyDetail from "../../components/studyViews/StudyDetail";
const StudyId = ({ studyData }) => {
	const router = useRouter();
	const { studyId } = router.query;
	return (
		<>
			<Head>
				<title>{studyData.title} </title>
				<meta name="description" content={studyData.title} />
				<meta name="keyword" content={studyData.title} />
			</Head>
			<h1>StudyId:{studyId}</h1>
			<StudyDetail image={studyData.image} title={studyData.title} address={studyData.address} description={studyData.description} />
		</>
	);
};

export async function getStaticPaths() {
	const client = await MongoClient.connect("mongodb+srv://admin:1234@study-cluster.q9t7mcx.mongodb.net/?retryWrites=true&w=majority");
	const db = client.db();
	const studyCollection = db.collection("study");
	const result = await studyCollection.find({}, { _id: 1 }).toArray();
	client.close();
	return {
		fallback: "blocking",
		paths: result.map((study) => {
			return { params: { studyId: study._id.toString() } };
		}),
	};
}

export async function getStaticProps(context) {
	const studyItemId = context.params.studyId;
	const client = await MongoClient.connect("mongodb+srv://admin:1234@study-cluster.q9t7mcx.mongodb.net/?retryWrites=true&w=majority");
	const db = client.db();
	const studyCollection = db.collection("study");
	const selectStudy = await studyCollection.findOne({ _id: new ObjectId(studyItemId) });

	client.close();
	return {
		props: {
			studyData: {
				id: selectStudy._id.toString(),
				title: selectStudy.title,
				address: selectStudy.address,
				image: selectStudy.image,
				description: selectStudy.description,
			},
		},
	};
}

export default StudyId;
