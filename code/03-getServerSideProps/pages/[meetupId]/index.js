import MeetupDetail from "../../../../components/meetups/MeetupDetail";

/* 
components\meetups\MeetupDetail.js
로 이동한다

const MeetupDetail = () => {
	return (
		<div>
			<img src="http://qwerew.cafe24.com/images/1.jpg" alt="리액트스터디" />
			<h1>취준생 팀프로젝트 프론트엔드 한분구해요</h1>
			<address>강남역 </address>
			<p>프로젝트 관련 주의사항 : 월,수,금 오전시간에 정기 회의를 계획중이고, 코어타임은 평일 오후 1시부터 5시까지 최소 4시간 정도할 수 있으시면 좋겠고, 그외 특이사항은 되도록 전에 말씀해주시면 감사하겠습니다.</p>
		</div>
	);
};
export default MeetupDetail;
 */

import React from "react";

const MeetupDetails = () => {
	return (
		<div>
			<MeetupDetail image={"http://qwerew.cafe24.com/images/1.jpg"} title={"리액트스터디"} address={"강남역"} description={"리액트스터디"}/>
		</div>
	);
};
export default MeetupDetails;
