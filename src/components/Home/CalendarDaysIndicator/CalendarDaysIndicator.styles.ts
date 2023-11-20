import styled from 'styled-components';

export const CalendarDaysIndicatorWrapper = styled.div``;

export const CalendarDaysIndicatorList = styled.ul`
	display: flex;
	justify-content: space-between;
`;

export const CalendarDaysIndicatorListItem = styled.li`
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
