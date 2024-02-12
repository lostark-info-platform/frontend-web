import Flex from '@/components/common/Flex';
import Icon from '@/components/common/Icon';
import { HomeCalendarHeaderTitle } from './HomeCalendarHeader';

const HomeCalendarHeader = () => {
	return (
		<Flex justifyContent='center' alignItems='center'>
			<Flex alignItems='center' gap={8}>
				<HomeCalendarHeaderTitle>8월 1주차</HomeCalendarHeaderTitle>
				<Icon variant='Calendar' />
			</Flex>
		</Flex>
	);
};

export default HomeCalendarHeader;
