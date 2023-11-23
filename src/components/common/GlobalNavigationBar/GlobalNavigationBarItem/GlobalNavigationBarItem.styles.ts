import styled from 'styled-components';

export const GlobalNavigationBarItemWrapper = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
`;

export const GlobalNavigationBarItemIcon = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;

	background: rgba(232, 232, 232, 1);

	.active & {
		background: rgba(65, 65, 65, 1);
	}
`;

export const GlobalNavigationBarItemLabel = styled.p`
	color: rgba(145, 145, 145, 1);

	.active & {
		color: rgba(65, 65, 65, 1);
		font-weight: 700;
	}
`;
