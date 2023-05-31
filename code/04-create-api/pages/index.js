import StudyList from '../components/studyViews/StudyList';
const STUDY = [
	{ id: 's1', title: 'iOS 개발 및 Swift 스터디 모집', image: 'http://qwerew.cafe24.com/images/1.jpg', address: '강남 스벅', description: '스터디의 목적은 취업을 위해, 또는 원하는 iOS 부트캠프 활동 지원을 위해 Swift 와 iOS개발을 함께 공부해나가는 것이 목표입니다.' },
	{ id: 's2', title: 'JS 코테스터디 충원', image: 'http://qwerew.cafe24.com/images/2.jpg', address: '구글, 줌', description: '프론트엔드 개발자로 취준하시는 분들이 들어오시면 좋을 것 같아요..' },
];
const Home = ({ studyInit }) => {
	return (
		<>
			<h1>Home</h1>
			<StudyList studys={studyInit} />
		</>
	);
};

export function getStaticProps() {
	return {
		props: {
			studyInit: STUDY,
		},
		revalidate: 10,
	};
}

/* 
export function getServerSideProps(context) {
	const req=context.req;
	const res=context.res;

	return {
		props: {
			studyInit: STUDY,
		},
	};
}
 */
export default Home;
