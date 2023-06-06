import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>리덕스</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>보유 하트</a>
          </li>
          <li>
            <a href='/'>내 정보</a>
          </li>
          <li>
            <button>로그아웃</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
