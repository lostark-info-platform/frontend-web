import Icon from '@/components/common/Icon';
import {
	CalendarHeaderContainer,
	CalendarHeaderTitle,
	CalendarHeaderWrapper,
} from './CalendarHeader.styles';

const CalendarHeader = () => {
	return (
		<CalendarHeaderContainer>
			<CalendarHeaderWrapper>
				<CalendarHeaderTitle>8월 1주차</CalendarHeaderTitle>
				<Icon variant='Calendar' />
			</CalendarHeaderWrapper>
		</CalendarHeaderContainer>
	);
};

export default CalendarHeader;
