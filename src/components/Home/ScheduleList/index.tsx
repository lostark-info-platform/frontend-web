import Schedule from './Schedule';
import { ScheduleListWrapper } from './ScheduleList.styles';

const ScheduleList = () => {
	return (
		<ScheduleListWrapper>
			{[1, 2, 3].map((_, index) => {
				return <Schedule key={index} />;
			})}
		</ScheduleListWrapper>
	);
};

export default ScheduleList;
