import styled from 'styled-components';

export const ButtonTabsWrapper = styled.div`
	display: flex;
	gap: 8px;
`;

export const ButtonTabButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 8px 12px;
	font-size: 16;
	font-weight: 400;
	color: #919191;

	background: #fff;
	color: #414141;
	border-radius: 8px;
	box-shadow: 0 0 4px 0 rgba(115, 115, 115, 0.08);

	&.active {
		font-weight: 700;
		color: #fff;
		background: #414141;
	}
`;
