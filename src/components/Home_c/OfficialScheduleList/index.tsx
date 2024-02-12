import { OfficialScheduleListWrapper } from './OfficialSchedule.styles';
import OfficialSchedule from './OfficialSchedule';

const OfficialScheduleList = () => {
	return (
		<OfficialScheduleListWrapper>
			{[1, 2, 3].map((_, index) => {
				return <OfficialSchedule key={index} />;
			})}
		</OfficialScheduleListWrapper>
	);
};

export default OfficialScheduleList;
