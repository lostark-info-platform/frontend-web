import AppContainer from '@/components/common/AppContainer';
import Image from 'next/image';
import styled from 'styled-components';

export const RaidModalWrapper = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	z-index: 9999;
`;

export const RaidModalDimmer = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.8);
`;

export const RaidModalMain = styled(AppContainer)`
	position: fixed;
	left: 50%;
	bottom: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 44px);
	transform: translate(-50%, 0);
	background: #fff;
	border-radius: 16px 16px 0 0;
	padding: 16px;
`;

export const RaidModalContent = styled.div``;

export const RaidHeaderThumbanail = styled(Image)`
	border-radius: 4px;
	object-fit: cover;
`;

export const RaidHeaderName = styled.p`
	font-size: 16px;
	font-weight: 600;
	color: #414141;
`;

export const RaidHeaderSubText = styled.p`
	font-size: 16px;
	font-weight: 400;
	color: #999999;
`;

export const RaidHeaderReward = styled.p`
	font-size: 16px;
	font-weight: 600;
	color: #333333;
`;

export const RaidItemTitle = styled.p`
	font-size: 16px;
	font-weight: 400;
	color: #333333;
`;

export const RaidItemReward = styled.p`
	font-size: 14px;
	font-weight: 600;
	color: #eea921;
`;

export const RaidFooter = styled.div`
	display: flex;
	margin-top: auto;
	gap: 12px;
`;

export const RaidButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 56px;
	padding: 0 16px;
	font-size: 20px;
	font-weight: 600;
	color: #414141;
	width: 100%;
	border-radius: 8px;

	&.blue {
		background: #5578f0;
		color: #fff;
	}
`;
