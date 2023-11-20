import {
	AppBottomNavigationIcon,
	AppBottomNavigationItem,
	AppBottomNavigationList,
	AppBottomNavigationTitle,
	AppBottomNavigationWrapper,
} from './AppBottomNavigation.styles';

const appBottomNavigationItems = [
	{
		title: '홈',
	},
	{
		title: '내 일정',
	},
	{
		title: '커뮤니티',
	},
	{
		title: '내정보',
	},
];

const AppBottomNavigation = () => {
	return (
		<AppBottomNavigationWrapper>
			<AppBottomNavigationList as='ul'>
				{appBottomNavigationItems.map(({ title }, index) => {
					return (
						<AppBottomNavigationItem
							className={index === 0 ? 'active' : ''}
							key={index}
						>
							<AppBottomNavigationIcon />
							<AppBottomNavigationTitle>
								{title}
							</AppBottomNavigationTitle>
						</AppBottomNavigationItem>
					);
				})}
			</AppBottomNavigationList>
		</AppBottomNavigationWrapper>
	);
};

export default AppBottomNavigation;
