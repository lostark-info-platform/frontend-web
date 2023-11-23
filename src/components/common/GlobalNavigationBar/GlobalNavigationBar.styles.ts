import styled from 'styled-components';
import AppGutter from '../../app/AppGutter';

export const GlobalNavigationBarWrapper = styled.div`
	width: 100%;
	height: 85px;
	display: flex;
	align-items: center;
	padding: 16px 0;
	background: rgba(255, 255, 255, 1);
	border-top: 1px solid rgba(189, 197, 205, 1);
	box-shadow: 0px -2px 4px 0 rgba(0, 0, 0, 0.04);
`;

export const GlobalNavigationBarList = styled(AppGutter)`
	display: flex;
	justify-content: space-between;
`;
