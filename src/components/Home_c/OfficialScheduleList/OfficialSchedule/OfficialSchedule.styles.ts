import Image from 'next/image';
import styled from 'styled-components';

export const OfficialScheduleWrapper = styled.div`
	border: 1px solid #ececec;
	border-radius: 8px;
`;

export const OfficialScheduleCategoryWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 16px;
	border-bottom: 1px solid #ececec;
`;
export const OfficialScheduleCategoryTitle = styled.p`
	font-size: 16px;
	font-weight: 600;
	color: #414141;
`;

export const OfficialScheduleTimeout = styled.p`
	font-size: 14px;
	font-weight: 600;
	color: #a65ffd;
`;

export const OfficialScheduleMapWrapper = styled.div`
	display: flex;
	gap: 16px;
	padding: 16px;
`;

export const OfficialScheduleMapThumbnail = styled(Image).attrs({
	width: 64,
	height: 64,
	objectFit: 'cover',
})`
	border-radius: 4px;
`;

export const OfficialScheduleMapTitle = styled.p`
	font-size: 16px;
	font-weight: 700;
	color: #414141;
`;

export const OfficialScheduleMapRewardsWrapper = styled.div`
	padding: 0 16px 16px;
`;
export const OfficialScheduleMapRewardsSectionTitle = styled.div``;
export const OfficialScheduleMapRewardsList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;

export const OfficialScheduleMapRewardThumbnail = styled(Image).attrs({
	width: 50,
	height: 50,
	objectFit: 'cover',
})`
	border-radius: 4px;
`;
