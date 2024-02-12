import Flex from '@/components/common/Flex';
import {
	HomeOfficialScheduleContentsWrapper,
	OfficialScheduleContentsItemWrapper,
	OfficialScheduleContentsItemStatus,
	OfficialScheduleContentsItemThumbnail,
	OfficialScheduleContentsItemTitle,
} from './HomeOfficialScheduleContents.styles';
import classNames from 'classnames';

type OfficialScheduleContents = {
	thumbnail: string;
	title: string;
	time: number;
	isComplete: boolean;
};

function HomeOfficialScheduleContents() {
	const officialScheduleContentsList: OfficialScheduleContents[] = [
		{
			thumbnail:
				'/assets/mock-images/mock-official-schedule-thumbnail.png',
			title: '카오스 게이트',
			time: 160,
			isComplete: false,
		},
		{
			thumbnail:
				'/assets/mock-images/mock-official-schedule-thumbnail.png',
			title: '카오스 게이트',
			time: 160,
			isComplete: false,
		},
		{
			thumbnail:
				'/assets/mock-images/mock-official-schedule-thumbnail.png',
			title: '필드보스',
			time: 160,
			isComplete: true,
		},
		{
			thumbnail:
				'/assets/mock-images/mock-official-schedule-thumbnail.png',
			title: '필드보스',
			time: 160,
			isComplete: true,
		},
		{
			thumbnail:
				'/assets/mock-images/mock-official-schedule-thumbnail.png',
			title: '필드보스',
			time: 160,
			isComplete: true,
		},
		{
			thumbnail:
				'/assets/mock-images/mock-official-schedule-thumbnail.png',
			title: '필드보스',
			time: 160,
			isComplete: true,
		},
	];
	return (
		<HomeOfficialScheduleContentsWrapper>
			{officialScheduleContentsList.map((item) => (
				<OfficialScheduleContentsItem key={item.title} {...item} />
			))}
		</HomeOfficialScheduleContentsWrapper>
	);
}

export default HomeOfficialScheduleContents;

type OfficialScheduleContentsItemProps = OfficialScheduleContents;

function OfficialScheduleContentsItem({
	thumbnail,
	title,
	// time,
	isComplete,
}: OfficialScheduleContentsItemProps) {
	return (
		<OfficialScheduleContentsItemWrapper>
			<Flex gap={16} alignItems='center'>
				<OfficialScheduleContentsItemThumbnail
					src={thumbnail}
					width={40}
					height={40}
					alt='공식 일정 콘텐츠 썸네일 이미지'
				/>
				<OfficialScheduleContentsItemTitle>
					{title}
				</OfficialScheduleContentsItemTitle>
			</Flex>
			<OfficialScheduleContentsItemStatus
				className={classNames(isComplete ? 'complete' : 'time')}
			>
				{isComplete ? '완료' : '00:00'}
			</OfficialScheduleContentsItemStatus>
		</OfficialScheduleContentsItemWrapper>
	);
}
