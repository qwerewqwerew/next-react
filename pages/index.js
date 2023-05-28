import MeetupList from "../components/meetups/MeetupList";

const STUDY_DB = [
	{ id: "m1", title: "그림1", image: "http://qwerew.cafe24.com/images/1.jpg", address: "서울시 강남구 스벅", description: "첫번째 만남" },
	{ id: "m2", title: "그림2", image: "http://qwerew.cafe24.com/images/2.jpg", address: "서울시 강남구 스벅", description: "두번째 만남" },
	{ id: "m3", title: "그림3", image: "http://qwerew.cafe24.com/images/3.jpg", address: "경기 성남시 스벅", description: "세번째 만남" },
];

const Home = (props) => {
	return <MeetupList meetups={props.studies} />;
};
// export async function getStaticProps() {
// 	return {
// 		props: {
// 			studies: STUDY_DB,
// 		},
// 		//점진적 정적생성: 대기 초시간(지정된 시간마다 정보갱신)
// 		revalidate:3600
// 	};
// }

// getServerSideProps: 서버에서 요청이 들어올때마다 실행된다
export async function getServerSideProps(context) {
	const req = context.req;
	const res = context.res;
	//api에서 데이터 가져오기
	return {
		props: {
			studies: STUDY_DB,
		},
	};
}

export default Home;
