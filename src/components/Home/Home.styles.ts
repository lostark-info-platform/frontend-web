import styled from 'styled-components';
import AppContainer from '../app/AppContainer';

export const HomeWrapper = styled(AppContainer)`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100vh;
	background: #fbfbfb;
`;

export const HomeHeader = styled(AppContainer)`
	position: fixed;
	width: 100%;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 8888;
`;

export const HomeMain = styled.main`
	width: 100%;
	padding: 140px 0 85px;
`;

export const HomeContentWrapper = styled.div`
	padding: 60px 0 80px;
`;

export const HomeContentBox = styled.div`
	background: white;
	border-radius: 8px;
	padding: 16px;

	box-shadow: 0px 0px 8px 0 rgba(115, 115, 115, 0.15);
`;

export const HomeDivider = styled.hr`
	border: 0;
	padding: 0;
	margin: 24px 0;
	border-top: 1px solid #ececec;
`;

export const HomeTitle = styled.h2`
	font-size: 16px;
	font-weight: 600;
	color: #414141;
`;

export const HomeFooter = styled(AppContainer)`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 8888;
`;

export const HomeAddScheduleButton = styled.button`
	position: fixed;
	left: 50%;
	bottom: 102px;
	transform: translateX(-50%);

	width: max-content;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	padding: 12px;
	font-size: 16px;
	font-weight: 600;
	color: white;
	background: #5578f0;
	border: 0;
	border-radius: 60px;
	cursor: pointer;
`;
