import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
	console.log(props);
	return (
		<>
			<Head>
				<title>{props.meetupData.title}</title>
				<meta name="description" content={props.meetupData.description} />
			</Head>
			<MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description} />
		</>
	);
};

export async function getStaticPaths() {
	const client = await MongoClient.connect("mongodb+srv://admin:1234@cluster0.koxhosh.mongodb.net/study?retryWrites=true&w=majority");
	const db = client.db();
	const stydyCollection = db.collection("study");
	const meetups = await stydyCollection.find({}, { _id: 1 }).toArray();
	client.close();
	return {
		//fallback: false,
		fallback: "blocking",
		paths: meetups.map((meetup) => {
			return { params: { meetupId: meetup._id.toString() } };
		}),
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;
	const client = await MongoClient.connect("mongodb+srv://admin:1234@cluster0.koxhosh.mongodb.net/study?retryWrites=true&w=majority");
	const db = client.db();
	const stydyCollection = db.collection("study");
	const selectedMeetup = await stydyCollection.findOne({ _id: new ObjectId(meetupId) });

	client.close();
	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				address: selectedMeetup.address,
				image: selectedMeetup.image,
				description: selectedMeetup.description,
			},
		},
	};
}
export default MeetupDetails;
