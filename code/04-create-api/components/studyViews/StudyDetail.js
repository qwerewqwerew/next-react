import classes from './StudyDetail.module.css';
const StudyDetail = (props) => {
	return (
		<section className={classes.detail}>
			<img src={props.image} alt={props.title} />
			<h2>{props.title}</h2>
			<ul>
				<li>{props.address}</li>
				<li>{props.description}</li>
			</ul>
		</section>
	);
};
export default StudyDetail;
