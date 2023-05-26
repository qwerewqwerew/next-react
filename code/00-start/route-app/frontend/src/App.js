// 지시문

// 1. 컴포넌트 페이지 5개 추가 (콘텐츠는 h1으로 간단히 구성)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. 5개의 페이지에 라우팅 과 라우트 정의 하기
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. 모든 페이지에 <MainNavigation> 컴포넌트를 추가하는 root layout 을 추가하기
// 4. MainNavigation 에 페이지 링크 넣기
// 5. MainNavigation 의 링크는 활성화 처리 하기
// 6. EventsPage에 dummy events list 출력
//    모든 목록 항목에는 해당 EventDetailPage에 대한 링크가 포함하기
// 7. Event Detail 페이지에서 선택한 이벤트의 ID 출력
// 추가: 모든 /events 경로 위에  <EventNavigation> 컴포넌트를 포함해보기
//Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
	return (
		<>
			<h1>LOGO</h1>
		</>
	);
}

export default App;
