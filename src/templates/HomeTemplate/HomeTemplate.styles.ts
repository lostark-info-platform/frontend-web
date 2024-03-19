import AppContainer from '@/components/common/AppContainer';
import styled from 'styled-components';

export const HomeTemplateWrapper = styled(AppContainer)`
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background: #fbfbfb;
`;

export const HomeTemplateHeader = styled(AppContainer)`
	position: fixed;
	width: 100%;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 8888;
`;

export const HomeTemplateMain = styled.main`
	width: 100%;
	padding: 56px 0 85px;
`;

export const HomeTemplateContentWrapper = styled.div`
	padding: 60px 0 80px;
`;

export const HomeTemplateFooter = styled(AppContainer)`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 8888;
`;
