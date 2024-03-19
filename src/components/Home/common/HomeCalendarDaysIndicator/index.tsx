import Spacing from '@/components/common/Spacing';
import {
	HomeCalendarDaysIndicatorList,
	HomeCalendarDaysIndicatorListItem,
	HomeCalendarDaysIndicatorTitle,
	HomeCalendarDaysIndicatorWrapper,
} from './HomeCalendarDaysIndicator.styles';
import Flex from '@/components/common/Flex';

const HomeCalendarDaysIndicator = () => {
	return (
		<>
			<Flex justifyContent='center'>
				<HomeCalendarDaysIndicatorTitle>
					8월 1주차
				</HomeCalendarDaysIndicatorTitle>
			</Flex>
			<Spacing size={12} />
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
		</>
	);
};

export default HomeCalendarDaysIndicator;
