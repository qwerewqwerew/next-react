import classes from './Auth.module.css';

const Auth = () => {
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>이메일</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>비밀번호</label>
            <input type='password' id='password' />
          </div>
          <button>로그인</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
