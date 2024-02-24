import HomeTemplate from '@/templates/HomeTemplate';
import HomeCalendarHeader from './common/HomeCalendarHeader';
import Spacing from '../common/Spacing';
import HomeCalendarDaysIndicator from './common/HomeCalendarDaysIndicator';
// import { HomeAddScheduleButton, HomeTitle } from './Home.styles';
import AppGutter from '../common/AppGutter';
import HomeOfficialScheduleSection from './common/HomeOfficialScheduleSection';
// import Icon from '../common/Icon';
// import HomeMyScheduleSection from './common/HomeMyScheduleSection';

const Home = () => {
	return (
		<HomeTemplate>
			<Spacing size={40} />
			<HomeCalendarHeader />
			<Spacing size={12} />
			<HomeCalendarDaysIndicator />
			<Spacing size={24} />
			<AppGutter>
				<HomeOfficialScheduleSection />
				<Spacing size={24} />
				{/* <HomeTitle>내 일정</HomeTitle>
				<Spacing size={12} /> */}
				{/* <HomeMyScheduleSection /> */}
			</AppGutter>
			<Spacing size={40} />
			{/* <HomeAddScheduleButton>
				일정 등록하기
				<Icon variant='Plus' />
			</HomeAddScheduleButton> */}
		</HomeTemplate>
	);
};

export default Home;

{
	/* <HomeFooter>
		<HomeAddScheduleButton>
			일정 등록하기
			<Icon variant='Plus' />
		</HomeAddScheduleButton>
		<AppBottomNavigation />
	</HomeFooter> */
}
