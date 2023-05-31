import { useRouter } from 'next/router';
import StudyDetail from '../../components/studyViews/StudyDetail';
const StudyId = () => {
	const router = useRouter();
	const { studyId } = router.query;
	console.log(studyId);
	return (
		<>
			<h1>StudyId:{studyId}</h1>
			<StudyDetail image={'http://qwerew.cafe24.com/images/1.jpg'} title={'iOS 개발 및 Swift 스터디 모집'} address={'강남 스벅'} description={'스터디의 목적은 취업을 위해, 또는 원하는 iOS 부트캠프 활동 지원을 위해 Swift 와 iOS개발을 함께 공부해나가는 것이 목표입니다.'} />
		</>
	);
};
export async function getStaticPaths() {
	return {
		fallback: false,
		paths:[
			{ params: { studyId: 's1' } },
			{ params: { studyId: 's2' } },
		],	
	}
}

export async function getStaticProps(context) {
	const studyId = context.params.studyId;
	return {
		props: {
			study: { id: studyId, image: 'http://qwerew.cafe24.com/images/1.jpg', title: 'iOS 개발 및 Swift 스터디 모집', address: '강남 스벅', description: '스터디의 목적은 취업을 위해, 또는 원하는 iOS 부트캠프 활동 지원을 위해 Swift 와 iOS개발을 함께 공부해나가는 것이 목표입니다.' },
		},
	};
}

export default StudyId;
