import styled from 'styled-components';

export const HomeCalendarDaysIndicatorTitle = styled.p`
	color: #414141;
	font-size: 20px;
	font-weight: 700;
`;

export const HomeCalendarDaysIndicatorWrapper = styled.div`
	border-top: 1px solid #ececec;
	border-bottom: 1px solid #ececec;
	background: white;
	padding: 16px;
`;

export const HomeCalendarDaysIndicatorList = styled.ul`
	display: flex;
	justify-content: space-between;
`;

export const HomeCalendarDaysIndicatorListItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;
	width: 34px;
	padding: 8px 10px;

	.day {
		font-size: 14px;
		color: #919191;
	}

	.date {
		font-size: 16px;
		font-weight: 700;
		color: #666666;
	}

	&.active {
		background: #5578f0;
		border-radius: 4px;

		.day,
		.date {
			font-weight: 700;
			color: white;
		}
	}
`;
