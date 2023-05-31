import StudyItem from './StudyItem';
import classes from './StudyList.module.css';

function StudyList(props) {
  return (
    <ul className={classes.list}>
      {props.studys.map((study) => (
        <StudyItem
          key={study.id}
          id={study.id}
          image={study.image}
          title={study.title}
          address={study.address}
        />
      ))}
    </ul>
  );
}

export default StudyList;
