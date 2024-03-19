import styled from 'styled-components';
import AppContainer from '../AppContainer';

export const MobileLayoutWrapper = styled(AppContainer)`
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background: #fbfbfb;
`;

export const MobileLayoutHeaderWrapper = styled(AppContainer)`
	flex-shrink: 0;
	position: fixed;
	z-index: 9997;
	left: 0;
	top: 0;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	height: 56px;
	padding: 0 16px;
	background: #fff;
`;

export const MobileLayoutHeaderColumn = styled.div`
	display: flex;
	align-items: center;
	width: 100%;

	&.mobile-layout__header-column-left {
		justify-content: flex-start;
	}
	&.mobile-layout__header-column-center {
		justify-content: center;
	}
	&.mobile-layout__header-column-right {
		justify-content: flex-end;
	}
`;

export const MobileLayoutHeaderIconButtonWrapper = styled.button``;

export const MobileLayoutHeaderTitle = styled.h2`
	font-size: 20px;
	font-weight: 700;
	white-space: nowrap;
`;

export const MobileLayoutContent = styled.main`
	width: 100%;
	padding: 56px 0 0;
`;
