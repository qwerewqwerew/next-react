import Card from '../ui/Card';
import classes from './StudyItem.module.css';

function StudyItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button>더보기</button>
        </div>
      </Card>
    </li>
  );
}

export default StudyItem;
