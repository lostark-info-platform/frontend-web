import Spacing from '@/components/common/Spacing';
import {
	OfficialScheduleCategoryTitle,
	OfficialScheduleCategoryWrapper,
	OfficialScheduleMapRewardsList,
	OfficialScheduleMapRewardThumbnail,
	OfficialScheduleMapRewardsSectionTitle,
	OfficialScheduleMapRewardsWrapper,
	OfficialScheduleMapThumbnail,
	OfficialScheduleMapWrapper,
	OfficialScheduleTimeout,
	OfficialScheduleWrapper,
	OfficialScheduleMapTitle,
} from './OfficialSchedule.styles';

const OfficialSchedule = () => {
	return (
		<OfficialScheduleWrapper>
			<OfficialScheduleCategoryWrapper>
				<OfficialScheduleCategoryTitle>
					모험섬
				</OfficialScheduleCategoryTitle>
				<OfficialScheduleTimeout>등장 예정</OfficialScheduleTimeout>
			</OfficialScheduleCategoryWrapper>
			<OfficialScheduleMapWrapper>
				<OfficialScheduleMapThumbnail
					src={
						'/assets/mock-images/mock-official-schedule-thumbnail.png'
					}
					alt='죽음의 협곡'
				/>
				<OfficialScheduleMapTitle>죽음의 협곡</OfficialScheduleMapTitle>
			</OfficialScheduleMapWrapper>
			<OfficialScheduleMapRewardsWrapper>
				<OfficialScheduleMapRewardsSectionTitle>
					획득복상
				</OfficialScheduleMapRewardsSectionTitle>
				<Spacing size={8} />
				<OfficialScheduleMapRewardsList>
					<OfficialScheduleMapRewardThumbnail
						src={
							'/assets/mock-images/mock-official-schedule-reward-thumbnail-01.png'
						}
						alt='획득 보상'
					/>
					<OfficialScheduleMapRewardThumbnail
						src={
							'/assets/mock-images/mock-official-schedule-reward-thumbnail-02.png'
						}
						alt='획득 보상'
					/>
					<OfficialScheduleMapRewardThumbnail
						src={
							'/assets/mock-images/mock-official-schedule-reward-thumbnail-03.png'
						}
						alt='획득 보상'
					/>
					<OfficialScheduleMapRewardThumbnail
						src={
							'/assets/mock-images/mock-official-schedule-reward-thumbnail-04.png'
						}
						alt='획득 보상'
					/>
					<OfficialScheduleMapRewardThumbnail
						src={
							'/assets/mock-images/mock-official-schedule-reward-thumbnail-05.png'
						}
						alt='획득 보상'
					/>
				</OfficialScheduleMapRewardsList>
			</OfficialScheduleMapRewardsWrapper>
		</OfficialScheduleWrapper>
	);
};

export default OfficialSchedule;
