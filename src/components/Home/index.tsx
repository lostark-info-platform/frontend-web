import Spacing from '../common/Spacing';
import HomeCalendarDaysIndicator from './common/HomeCalendarDaysIndicator';
import AppGutter from '../common/AppGutter';
import HomeOfficialScheduleSection from './common/HomeOfficialScheduleSection';
import { useEffect } from 'react';
import { apiService } from '@/services';
import MobileLayout from '../common/MobileLayout';
import Image from 'next/image';
import Avatar from '../common/Avatar';

const Home = () => {
	useEffect(() => {
		apiService.getOfficialSummary();
	}, []);
	return (
		<MobileLayout>
			<MobileLayout.Header
				left={
					<Image
						width={112}
						height={24}
						alt='로고'
						src={'/assets/common/title-logo.svg'}
					/>
				}
				right={<Avatar src='/assets/mock-images/mock-profile.png' />}
			/>
			<MobileLayout.Content>
				<Spacing size={40} />
				<HomeCalendarDaysIndicator />
				<Spacing size={24} />
				<AppGutter>
					<HomeOfficialScheduleSection />
					<Spacing size={24} />
				</AppGutter>
				<Spacing size={40} />
			</MobileLayout.Content>
		</MobileLayout>
	);
};

export default Home;
