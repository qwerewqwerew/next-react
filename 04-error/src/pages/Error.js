import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>404 Error</h1>
        <p>요청하신 페이지가 없습니다</p>
      </main>
    </>
  );
};
export default ErrorPage;
