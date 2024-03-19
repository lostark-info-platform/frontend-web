import Image from 'next/image';
import styled from 'styled-components';

export const OfficialContentInfoWrapper = styled.div`
	background: #fff;
	border-radius: 8px;
	box-shadow: 0 0 4px 0 rgba(115, 115, 115, 0.08);
`;

export const OfficialContentInfoHeaderWrapper = styled.div`
	padding: 16px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #d9d9d9;
`;

export const OfficialContentInfoHeaderTitle = styled.p`
	font-size: 16px;
	font-weight: 700;
	color: #414141;
`;

export const OfficialContentInfoHeaderTimeOut = styled.p`
	font-size: 16px;
	font-weight: 700;
	color: #a65ffd;
`;

export const OfficialContentInfoContentWrapper = styled.div`
	padding: 16px;
`;

export const OfficialContentInfoContentThumbnail = styled(Image).attrs({
	objectFit: 'cover',
	width: 64,
	height: 64,
})`
	border-radius: 4px;
`;

export const OfficialContentInfoContentTitle = styled.p`
	font-size: 16px;
	font-weight: 800;
`;

export const OfficialContentInfoContentSubTitle = styled.p`
	font-size: 12px;
	font-weight: 800;
	color: #919191;
`;

export const OfficialContentInfoContentText = styled.p`
	font-size: 16px;
	font-weight: 800;
`;

export const OfficialContentInfoRewardThumbnail = styled(Image).attrs({
	objectFit: 'cover',
	width: 49,
	height: 49,
})``;
