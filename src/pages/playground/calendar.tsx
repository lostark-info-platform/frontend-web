import useCalendar from '@/hooks/common/useCalendar';
import styled from 'styled-components';

const PlaygroundCalendarPage = () => {
	const { getCurrentMonth, goToPreviousMonth, goToNextMonth } = useCalendar();

	const currentMonthDays = getCurrentMonth();
	console.log('currentMonthDays: ', currentMonthDays);
	return (
		<div>
			<div>
				<button
					onClick={() => {
						goToPreviousMonth();
					}}
				>
					이전달
				</button>
				<button
					onClick={() => {
						goToNextMonth();
					}}
				>
					다음달
				</button>
			</div>
			<CalendarItemWrapper>
				{currentMonthDays.map(({ date }) => {
					return <div key={date.getDate()}>{date.getDate()}</div>;
				})}
			</CalendarItemWrapper>
		</div>
	);
};

export default PlaygroundCalendarPage;

const CalendarItemWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	text-align: center;
	& > div {
		width: calc(100% / 7);
		height: 40px;
		line-height: 40px;
		vertical-align: middle;
	}
`;
