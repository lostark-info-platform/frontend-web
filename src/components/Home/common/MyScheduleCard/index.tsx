import Checkbox from '@/components/common/Checkbox';
import {
	MyScheduleCardColorBar,
	MyScheduleCardContent,
	MyScheduleCardInfo,
	MyScheduleCardTitle,
	MyScheduleCardUserName,
	MyScheduleCardUserThumbnail,
	MyScheduleCardWrapper,
} from './MyScheduleCard.styles';
import Flex from '@/components/common/Flex';

const MyScheduleCard = () => {
	return (
		<MyScheduleCardWrapper>
			<Flex
				flexDirection='row'
				justifyContent='space-between'
				alignItems='center'
			>
				<Flex alignItems='center' flexDirection='row' gap={12}>
					<MyScheduleCardColorBar />
					<MyScheduleCardContent>
						<MyScheduleCardTitle>내 일정 1</MyScheduleCardTitle>
						<MyScheduleCardInfo>
							오후 4:00 - 5:00, 모험섬
						</MyScheduleCardInfo>
						<Flex flexDirection='column' gap={4}>
							<Flex alignItems='center' gap={8}>
								<MyScheduleCardUserThumbnail />
								<MyScheduleCardUserName>
									오문고감마
								</MyScheduleCardUserName>
							</Flex>
							<Flex alignItems='center' gap={8}>
								<MyScheduleCardUserThumbnail />
								<MyScheduleCardUserName>
									오문고감마
								</MyScheduleCardUserName>
							</Flex>
						</Flex>
					</MyScheduleCardContent>
				</Flex>
				<Checkbox id='my' />
			</Flex>
		</MyScheduleCardWrapper>
	);
};

export default MyScheduleCard;
