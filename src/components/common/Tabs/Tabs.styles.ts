import styled from 'styled-components';

export const TabsWrapper = styled.div`
	border-bottom: 1px solid #f5f5f5;
`;

export const TabButton = styled.button`
	position: relative;
	font-size: 16;
	font-weight: 600;
	padding: 12px 9px;
	color: #919191;

	&.active {
		&::after {
			content: '';
			display: inline-block;
			position: absolute;
			bottom: -1px;
			left: 0;
			width: 100%;
			height: 2px;
			background: #212429;
		}
		color: #414141;
	}
`;
