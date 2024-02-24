import AppContainer from '@/components/common/AppContainer';
import styled from 'styled-components';

export const BackTemplateWrapper = styled(AppContainer)`
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background: #fbfbfb;
`;

export const BackTemplateHeaderWrapper = styled(AppContainer)`
	height: 56px;
	display: flex;
	align-items: center;
	position: fixed;
	left: 50%;
	top: 0;
	transform: translateX(-50%);
`;

export const BackTemplateHeaderBackButton = styled.button`
	font-size: 0;
`;

export const BackTemplateMain = styled.main`
	width: 100%;
	padding: 56px 0 0;
`;
