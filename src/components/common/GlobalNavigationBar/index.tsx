import {
	GlobalNavigationBarList,
	GlobalNavigationBarWrapper,
} from './GlobalNavigationBar.styles';
import GlobalNavigationBarItem from './GlobalNavigationBarItem';

const globalNavigationBarItems = [
	{
		label: '홈',
	},
	{
		label: '내 일정',
	},
	{
		label: '커뮤니티',
	},
	{
		label: '내정보',
	},
];

const GlobalNavigationBar = () => {
	return (
		<GlobalNavigationBarWrapper>
			<GlobalNavigationBarList as='ul'>
				{globalNavigationBarItems.map(({ label }, index) => {
					return (
						<GlobalNavigationBarItem
							label={label}
							active={index === 0}
							key={label}
						/>
					);
				})}
			</GlobalNavigationBarList>
		</GlobalNavigationBarWrapper>
	);
};

export default GlobalNavigationBar;
