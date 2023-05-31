import { useRouter } from "next/router";
import NewStudyForm from "../../components/studyViews/NewStudyForm";
const NewStudy = () => {
	const router = useRouter();
	const addStudyFn = async (enteredStudyData) => {
		const response = await fetch("/api/new-study", {
			method: "POST",
			body: JSON.stringify(enteredStudyData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		router.push("/");
	};

	return (
		<>
			<h1>NewStudy</h1>
			<NewStudyForm onAddStudy={addStudyFn} />
		</>
	);
};
export default NewStudy;
