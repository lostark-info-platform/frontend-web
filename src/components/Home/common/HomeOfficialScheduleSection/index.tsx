import Tabs from '@/components/common/Tabs';
import { useMemo, useState } from 'react';
import HomeOfficialScheduleContents from './HomeOfficialScheduleContents';
import HomeOfficialScheduleRaid from './HomeOfficialScheduleRaid';
import Spacing from '@/components/common/Spacing';

type OfficialScheduleTabIds = 'contents' | 'raid';

const defaultTabId: OfficialScheduleTabIds = 'contents';

function HomeOfficialScheduleSection() {
	const [currentTabId, setCurrentTabId] =
		useState<OfficialScheduleTabIds>(defaultTabId);

	const officialScheduleTabMap = useMemo(
		() => ({
			contents: <HomeOfficialScheduleContents />,
			raid: <HomeOfficialScheduleRaid />,
		}),
		[currentTabId]
	);

	return (
		<>
			<Tabs
				defaultTabId={defaultTabId}
				tabList={[
					{
						label: '콘텐츠',
						id: 'contents',
					},
					{
						label: '레이드',
						id: 'raid',
					},
				]}
				onChangeTab={(tabId) => {
					setCurrentTabId(tabId as OfficialScheduleTabIds);
				}}
			/>
			<Spacing size={12} />
			{officialScheduleTabMap[currentTabId]}
		</>
	);
}

export default HomeOfficialScheduleSection;
