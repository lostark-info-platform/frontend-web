import Flex from '@/components/common/Flex';
import MyScheduleCard from '../MyScheduleCard';

function HomeMyScheduleSection() {
	return (
		<Flex flexDirection='column' gap={12} width={'100%'}>
			<MyScheduleCard />
			<MyScheduleCard />
			<MyScheduleCard />
			<MyScheduleCard />
		</Flex>
	);
}

export default HomeMyScheduleSection;
