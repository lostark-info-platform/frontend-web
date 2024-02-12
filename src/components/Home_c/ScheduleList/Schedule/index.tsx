import Spacing from '@/components/common/Spacing';
import {
	ScheduleCheckBox,
	ScheduleCheckBoxWrapper,
	ScheduleColorBar,
	ScheduleContentWrapper,
	ScheduleInfo,
	ScheduleTitle,
	ScheduleWrapper,
} from './Schedule.styles';

const Schedule = () => {
	return (
		<ScheduleWrapper>
			<ScheduleColorBar />
			<ScheduleContentWrapper>
				<ScheduleTitle>내 일정 1</ScheduleTitle>
				<Spacing size={8} />
				<ScheduleInfo>오후 4:00 - 5:00, 모험섬</ScheduleInfo>
			</ScheduleContentWrapper>
			<ScheduleCheckBoxWrapper>
				<ScheduleCheckBox />
			</ScheduleCheckBoxWrapper>
		</ScheduleWrapper>
	);
};

export default Schedule;
