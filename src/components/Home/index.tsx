import HomeTemplate from '@/templates/HomeTemplate';
import Spacing from '../common/Spacing';
import HomeCalendarDaysIndicator from './common/HomeCalendarDaysIndicator';
import AppGutter from '../common/AppGutter';
import HomeOfficialScheduleSection from './common/HomeOfficialScheduleSection';
import { useEffect } from 'react';
import { apiService } from '@/services';

const Home = () => {
	useEffect(() => {
		apiService.getOfficialSummary();
	}, []);
	return (
		<HomeTemplate>
			<Spacing size={40} />
			<HomeCalendarDaysIndicator />
			<Spacing size={24} />
			<AppGutter>
				<HomeOfficialScheduleSection />
				<Spacing size={24} />
			</AppGutter>
			<Spacing size={40} />
		</HomeTemplate>
	);
};

export default Home;
