import Flex from '@/components/common/Flex';
import {
	HomeOfficialScheduleRaidWrapper,
	OfficialScheduleRaidItemWrapper,
	OfficialScheduleRaidItemNickname,
	OfficialScheduleRaidItemReward,
	OfficialScheduleRaidItemSubText,
	OfficialScheduleRaidItemThumbnail,
	OfficialScheduleRaidTotalRewardWrapper,
	OfficialScheduleRaidTotalRewardTitle,
	OfficialScheduleRaidTotalRewardText,
	OfficialScheduleRaidTotalRewardBox,
} from './HomeOfficialScheduleRaid.styles';
import Icon from '@/components/common/Icon';
import { useState } from 'react';
import HomeOfficialScheduleRaidModal from '../../HomeOfficialScheduleRaidModal';

type OfficialScheduleRaid = {
	thumbnail: string;
	nickname: string;
	subText: string;
	reward: number;
};
function HomeOfficialScheduleRaid() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const officialScheduleRaidList: OfficialScheduleRaid[] = [
		{
			thumbnail:
				'/assets/mock-images/mock-official-schedule-thumbnail.png',
			nickname: '진큐리1',
			subText: '1635',
			reward: 21345,
		},
		{
			thumbnail:
				'/assets/mock-images/mock-official-schedule-thumbnail.png',
			nickname: '진큐리2',
			subText: '1635',
			reward: 21345,
		},
		{
			thumbnail:
				'/assets/mock-images/mock-official-schedule-thumbnail.png',
			nickname: '진큐리3',
			subText: '1635',
			reward: 21345,
		},
		{
			thumbnail:
				'/assets/mock-images/mock-official-schedule-thumbnail.png',
			nickname: '진큐리4',
			subText: '1635',
			reward: 21345,
		},
		{
			thumbnail:
				'/assets/mock-images/mock-official-schedule-thumbnail.png',
			nickname: '진큐리5',
			subText: '1635',
			reward: 21345,
		},
		{
			thumbnail:
				'/assets/mock-images/mock-official-schedule-thumbnail.png',
			nickname: '진큐리6',
			subText: '1635',
			reward: 21345,
		},
	];
	return (
		<HomeOfficialScheduleRaidWrapper>
			<OfficialScheduleRaidTotalReward />
			{officialScheduleRaidList.map((item, index) => (
				<OfficialScheduleRaidItem
					key={index}
					onClick={() => {
						setIsModalOpen(true);
					}}
					{...item}
				/>
			))}
			{isModalOpen && (
				<HomeOfficialScheduleRaidModal
					onCancle={() => {
						setIsModalOpen(false);
					}}
					onSave={() => {
						setIsModalOpen(false);
					}}
				/>
			)}
		</HomeOfficialScheduleRaidWrapper>
	);
}

export default HomeOfficialScheduleRaid;

function OfficialScheduleRaidTotalReward() {
	return (
		<OfficialScheduleRaidTotalRewardWrapper>
			<OfficialScheduleRaidTotalRewardBox>
				<Flex gap={8} alignItems='center'>
					<Icon variant='Reward' size={24} />
					<OfficialScheduleRaidTotalRewardTitle>
						총 획득 보상
					</OfficialScheduleRaidTotalRewardTitle>
				</Flex>
				<OfficialScheduleRaidTotalRewardText>
					92,745G
				</OfficialScheduleRaidTotalRewardText>
			</OfficialScheduleRaidTotalRewardBox>
		</OfficialScheduleRaidTotalRewardWrapper>
	);
}

type OfficialScheduleRaidItemProps = OfficialScheduleRaid & {
	onClick: () => void;
};

function OfficialScheduleRaidItem({
	thumbnail,
	nickname,
	subText,
	reward,
	onClick,
}: OfficialScheduleRaidItemProps) {
	const nf = new Intl.NumberFormat();
	return (
		<OfficialScheduleRaidItemWrapper onClick={onClick}>
			<Flex gap={16} alignItems='center'>
				<OfficialScheduleRaidItemThumbnail
					src={thumbnail}
					width={40}
					height={40}
					alt='공식 일정 레이드 썸네일 이미지'
				/>
				<div>
					<OfficialScheduleRaidItemNickname>
						{nickname}
					</OfficialScheduleRaidItemNickname>
					<OfficialScheduleRaidItemSubText>
						{subText}
					</OfficialScheduleRaidItemSubText>
				</div>
			</Flex>
			<Flex gap={8} alignItems='center'>
				<OfficialScheduleRaidItemReward>
					{nf.format(reward)}G
				</OfficialScheduleRaidItemReward>
				<Icon variant='ChevronRight' size={16} />
			</Flex>
		</OfficialScheduleRaidItemWrapper>
	);
}
