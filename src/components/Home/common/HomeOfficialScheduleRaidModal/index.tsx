import ModalContainer from '@/containers/ModalContainer';
import {
	RaidButton,
	RaidFooter,
	RaidHeaderName,
	RaidHeaderReward,
	RaidHeaderSubText,
	RaidHeaderThumbanail,
	RaidItemReward,
	RaidItemTitle,
	RaidModalContent,
	RaidModalDimmer,
	RaidModalMain,
	RaidModalWrapper,
} from './HomeOfficialScheduleRaidModal.styles';
import Flex from '@/components/common/Flex';
import Spacing from '@/components/common/Spacing';
import Checkbox from '@/components/common/Checkbox';

type HomeOfficialScheduleRaidItem = {
	title: string;
	reward: number;
};

type HomeOfficialScheduleRaidModalProps = {
	onCancle: () => void;
	onSave: () => void;
};
function HomeOfficialScheduleRaidModal({
	onCancle,
	onSave,
}: HomeOfficialScheduleRaidModalProps) {
	const raidItemList: HomeOfficialScheduleRaidItem[] = [
		{
			title: '레이드1',
			reward: 21345,
		},
		{
			title: '레이드2',
			reward: 21345,
		},
		{
			title: '레이드3',
			reward: 21345,
		},
		{
			title: '레이드4',
			reward: 21345,
		},
		{
			title: '레이드5',
			reward: 21345,
		},
		{
			title: '레이드6',
			reward: 21345,
		},
		{
			title: '레이드7',
			reward: 21345,
		},
		{
			title: '레이드8',
			reward: 21345,
		},
		{
			title: '레이드9',
			reward: 21345,
		},
		{
			title: '레이드10',
			reward: 21345,
		},
		{
			title: '레이드11',
			reward: 21345,
		},
	];
	return (
		<ModalContainer>
			<RaidModalWrapper>
				<RaidModalDimmer />
				<RaidModalMain>
					<RaidModalContent>
						<HomeOfficialScheduleRaidHeader />
						<Spacing size={24} />
						<Flex flexDirection='column' gap={24}>
							{raidItemList.map((item) => (
								<HomeOfficialScheduleRaidItem
									key={item.title}
									{...item}
								/>
							))}
						</Flex>
					</RaidModalContent>
					<RaidFooter>
						<RaidButton onClick={onCancle}>취소</RaidButton>
						<RaidButton className='blue' onClick={onSave}>
							저장
						</RaidButton>
					</RaidFooter>
				</RaidModalMain>
			</RaidModalWrapper>
		</ModalContainer>
	);
}

export default HomeOfficialScheduleRaidModal;

function HomeOfficialScheduleRaidHeader() {
	return (
		<Flex justifyContent='space-between' alignItems='center'>
			<Flex gap={16} alignItems='center'>
				<RaidHeaderThumbanail
					src={
						'/assets/mock-images/mock-official-schedule-thumbnail.png'
					}
					width={40}
					height={40}
					alt='공식 일정 레이드 썸네일 이미지'
				/>
				<div>
					<RaidHeaderName>진큐리1</RaidHeaderName>
					<RaidHeaderSubText>1635</RaidHeaderSubText>
				</div>
			</Flex>
			<RaidHeaderReward>21,345G</RaidHeaderReward>
		</Flex>
	);
}

type HomeOfficialScheduleRaidItemProps = HomeOfficialScheduleRaidItem;

function HomeOfficialScheduleRaidItem({
	title,
	reward,
}: HomeOfficialScheduleRaidItemProps) {
	const nf = new Intl.NumberFormat();
	return (
		<Flex alignItems='center' justifyContent='space-between' width='100%'>
			<Flex alignItems='center' gap={16}>
				<Checkbox id={title} />
				<RaidItemTitle>{title}</RaidItemTitle>
			</Flex>
			<RaidItemReward>{nf.format(reward)}G</RaidItemReward>
		</Flex>
	);
}
