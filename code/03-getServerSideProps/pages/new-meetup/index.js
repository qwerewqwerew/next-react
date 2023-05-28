import NewMeetupForm from "../../../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
	function addMeetUpFn(enteredMeetupDB) {
		console.log(enteredMeetupDB);
	}
	return <NewMeetupForm onAddMeetup={addMeetUpFn} />;
};
export default NewMeetup;
