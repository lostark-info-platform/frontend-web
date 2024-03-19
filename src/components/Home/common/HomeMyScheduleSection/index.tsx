import Flex from '@/components/common/Flex';
import MyScheduleCard from '../MyScheduleCard';

function HomeMyScheduleSection() {
	return (
		<Flex flexDirection='column' gap={12} width={'100%'}>
			<MyScheduleCard id='1' />
			<MyScheduleCard id='2' />
			<MyScheduleCard id='3' />
			<MyScheduleCard id='4' />
		</Flex>
	);
}

export default HomeMyScheduleSection;
