import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>👋🏻나의 스터디</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>모든 스터디</Link>
          </li>
          <li>
            <Link to='/new-study'>스터디 등록</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
