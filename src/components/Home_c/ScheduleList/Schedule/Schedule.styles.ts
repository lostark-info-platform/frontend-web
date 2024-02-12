import styled from 'styled-components';

export const ScheduleWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const ScheduleColorBar = styled.span`
	display: inline-block;
	width: 4px;
	height: 48px;
	border-radius: 50px;
	background: #7456ff;
`;

export const ScheduleContentWrapper = styled.div`
	padding: 0 12px;
	width: 100%;
`;

export const ScheduleTitle = styled.p`
	font-size: 16px;
	font-weight: 600;
	color: #414141;
`;
export const ScheduleInfo = styled.p`
	font-size: 14px;
	color: #919191;
`;

export const ScheduleCheckBoxWrapper = styled.div`
	padding-right: 16px;
	font-size: 0;
`;
export const ScheduleCheckBox = styled.span`
	display: inline-block;
	width: 28px;
	height: 28px;
	border: 1px solid #b4cdfa;
	border-radius: 4px;
`;
