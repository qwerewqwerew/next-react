/*  */import NewStudyForm from "../../components/studyViews/NewStudyForm";
const NewStudy = () => {
	const addStudyFn = (enteredStudyData) => {
		console.log(enteredStudyData);
	};
	return (
		<>
			<h1>NewStudy</h1>
			<NewStudyForm onAddStudy={addStudyFn} />
		</>
	);
};
export default NewStudy;
