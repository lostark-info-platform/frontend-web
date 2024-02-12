import {
	HomeCalendarDaysIndicatorList,
	HomeCalendarDaysIndicatorListItem,
	HomeCalendarDaysIndicatorWrapper,
} from './HomeCalendarDaysIndicator.styles';

const HomeCalendarDaysIndicator = () => {
	return (
		<HomeCalendarDaysIndicatorWrapper>
			<HomeCalendarDaysIndicatorList>
				{[
					{
						day: '월',
						date: '1',
					},
					{
						day: '화',
						date: '2',
					},
					{
						day: '수',
						date: '3',
					},
					{
						day: '목',
						date: '4',
					},
					{
						day: '금',
						date: '5',
					},
					{
						day: '토',
						date: '6',
					},
					{
						day: '일',
						date: '7',
					},
				].map(({ day, date }) => {
					return (
						<HomeCalendarDaysIndicatorListItem
							className={date === '1' ? 'active' : ''}
							key={day + date}
						>
							<span className='day'>{day}</span>
							<span className='date'>{date}</span>
						</HomeCalendarDaysIndicatorListItem>
					);
				})}
			</HomeCalendarDaysIndicatorList>
		</HomeCalendarDaysIndicatorWrapper>
	);
};

export default HomeCalendarDaysIndicator;
