import styled from 'styled-components';

export const MyScheduleCardWrapper = styled.div`
	width: 100%;
	border-radius: 8px;
	box-shadow: 0 0 4px 0 rgba(115, 115, 115, 0.08);
	padding: 32px;
	background: white;
`;

export const MyScheduleCardColorBar = styled.span`
	display: inline-block;
	width: 4px;
	height: 94px;
	border-radius: 50px;
	background: #7456ff;
`;

export const MyScheduleCardContent = styled.div`
	padding: 0 12px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const MyScheduleCardTitle = styled.p`
	font-size: 16px;
	font-weight: 600;
	color: #414141;
`;
export const MyScheduleCardInfo = styled.p`
	font-size: 14px;
	color: #919191;
`;

export const MyScheduleCardUserThumbnail = styled.span`
	display: inline-block;
	width: 16px;
	height: 16px;
	background: #d9d9d9;
	border-radius: 50%;
`;
export const MyScheduleCardUserName = styled.p`
	font-size: 14px;
	color: #414141;
`;

export const MyScheduleCardCheckBox = styled.span`
	display: inline-block;
	width: 28px;
	height: 28px;
	border: 1px solid #b4cdfa;
	border-radius: 4px;
`;
