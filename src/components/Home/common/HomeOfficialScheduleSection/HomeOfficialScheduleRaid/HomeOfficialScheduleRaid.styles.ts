import Image from 'next/image';
import styled from 'styled-components';

export const HomeOfficialScheduleRaidWrapper = styled.div`
	border-radius: 8px;
	box-shadow: 0 0 4px 0 rgba(115, 115, 115, 0.08);
	background: white;
	padding: 16px 0;
`;

export const OfficialScheduleRaidTotalRewardWrapper = styled.div`
	padding: 0 16px;
`;
export const OfficialScheduleRaidTotalRewardBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 8px;
	background: #fbfbfb;
	padding: 16px;
`;
export const OfficialScheduleRaidTotalRewardTitle = styled.p`
	font-size: 16px;
	font-weight: 700;
	color: #0f172a;
`;
export const OfficialScheduleRaidTotalRewardText = styled.p`
	font-size: 16px;
	font-weight: 600;
	color: #414141;
`;

export const OfficialScheduleRaidItemWrapper = styled.div`
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const OfficialScheduleRaidItemThumbnail = styled(Image)`
	border-radius: 4px;
	object-fit: cover;
`;

export const OfficialScheduleRaidItemNickname = styled.p`
	font-size: 16px;
	font-weight: 600;
	color: #414141;
`;

export const OfficialScheduleRaidItemSubText = styled.p`
	font-size: 16px;
	font-weight: 400;
	color: #999999;
`;

export const OfficialScheduleRaidItemReward = styled.p`
	font-size: 14px;
	font-weight: 600;
	color: #eea921;
`;
