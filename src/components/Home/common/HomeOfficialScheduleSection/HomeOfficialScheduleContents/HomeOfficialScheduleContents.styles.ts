import Image from 'next/image';
import styled from 'styled-components';

export const HomeOfficialScheduleContentsWrapper = styled.div`
	border-radius: 8px;
	box-shadow: 0 0 4px 0 rgba(115, 115, 115, 0.08);
	background: white;
`;

export const OfficialScheduleContentsItemWrapper = styled.div`
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;
export const OfficialScheduleContentsItemThumbnail = styled(Image)`
	border-radius: 4px;
	object-fit: cover;
`;

export const OfficialScheduleContentsItemTitle = styled.p`
	font-size: 16px;
	font-weight: 600;
	color: #414141;
`;

export const OfficialScheduleContentsItemStatus = styled.p`
	font-size: 14px;
	font-weight: 600;
	&.complete {
		color: #999999;
	}

	&.time {
		color: #5578f0;
	}
`;
