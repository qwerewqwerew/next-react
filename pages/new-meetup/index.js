import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
	const router = useRouter();
	async function addMeetUpFn(enteredMeetupDB) {
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			body: JSON.stringify(enteredMeetupDB),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		console.log(data);
		router.push("/");
	}
	return (
		<>
			<Head>
				<title>새 스터디등록</title>
				<meta name="description" content="스터디 등록하기" />
			</Head>
			<NewMeetupForm onAddMeetup={addMeetUpFn} />
		</>
	);
};
export default NewMeetup;
