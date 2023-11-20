import AppBottomNavigation from '../app/AppBottomNavigation';
import AppGutter from '../app/AppGutter';
import Icon from '../common/Icon';
import Spacing from '../common/Spacing';
import CalendarDaysIndicator from './CalendarDaysIndicator';
import CalendarHeader from './CalendarHeader';
import Header from './Header';
import {
	HomeAddScheduleButton,
	HomeContentBox,
	HomeDivider,
	HomeFooter,
	HomeHeader,
	HomeMain,
	HomeTitle,
	HomeWrapper,
} from './Home.styles';
import OfficialScheduleList from './OfficialScheduleList';
import ScheduleList from './ScheduleList';

const Home = () => {
	return (
		<HomeWrapper>
			<HomeHeader>
				<Header />
			</HomeHeader>
			<HomeMain>
				<AppGutter>
					<CalendarHeader />
					<Spacing size={12} />
					<HomeContentBox>
						<CalendarDaysIndicator />
						<HomeDivider />
						<HomeTitle>공식 일정</HomeTitle>
						<Spacing size={12} />
						<OfficialScheduleList />
						<HomeDivider />
						<HomeTitle>내가 쓴 일정</HomeTitle>
						<Spacing size={12} />
						<ScheduleList />
					</HomeContentBox>
				</AppGutter>
			</HomeMain>
			<HomeFooter>
				<HomeAddScheduleButton>
					일정 등록하기
					<Icon variant='Plus' />
				</HomeAddScheduleButton>
				<AppBottomNavigation />
			</HomeFooter>
		</HomeWrapper>
	);
};

export default Home;
