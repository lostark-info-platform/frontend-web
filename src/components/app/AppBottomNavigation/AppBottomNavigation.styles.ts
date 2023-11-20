import styled from 'styled-components';
import AppGutter from '../AppGutter';

export const AppBottomNavigationWrapper = styled.div`
	width: 100%;
	height: 85px;
	display: flex;
	align-items: center;
	padding: 16px 0;
	background: #5578f0;
	border-radius: 8px 8px 0 0;
`;

export const AppBottomNavigationList = styled(AppGutter)`
	display: flex;
	justify-content: space-between;
`;

export const AppBottomNavigationItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
`;

export const AppBottomNavigationIcon = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;

	background: #2844a2;

	.active & {
		background: white;
	}
`;

export const AppBottomNavigationTitle = styled.p`
	color: #2844a2;

	.active & {
		color: white;
		font-weight: 700;
	}
`;
