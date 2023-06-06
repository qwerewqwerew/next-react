import classes from './Counter.module.css';

const Counter = () => {
  const toggleCountFn = () => {};

  return (
    <main className={classes.counter}>
      <h1>좋아요❤❤</h1>
      <div className={classes.value}>받은 ❤ 개수</div>
      <button onClick={toggleCountFn}>❤ 보내기</button>
    </main>
  );
};

export default Counter;
