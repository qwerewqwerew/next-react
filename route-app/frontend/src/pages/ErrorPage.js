import { useRouteError } from "react-router-dom";
import MainNavigation from '../components/MainNavigation';
import PageContent from "./PageContent";

const ErrorPage = () => {
	const error = useRouteError();
	console.log("error", error);
	let title = "에러발생!";
	let message = "오류가 생겼어요!";

	if (error.status === 500) {
		message = JSON.parse(error.data).message;
	}

	if (error.status === 404) {
		title = "못찾았어요!";
		message = "경로나 파일을 찾을수 없습니다.";
	}
	return (
		<>
    <MainNavigation />
			<PageContent title={title}>
				<p>{message}</p>
			</PageContent>
		</>
	);
};
export default ErrorPage;
