import classNames from 'classnames';
import {
	GlobalNavigationBarItemIcon,
	GlobalNavigationBarItemLabel,
	GlobalNavigationBarItemWrapper,
} from './GlobalNavigationBarItem.styles';

type GlobalNavigationBarItemProps = {
	active: boolean;
	label: string;
};
const GlobalNavigationBarItem = ({
	active,
	label,
}: GlobalNavigationBarItemProps) => {
	return (
		<GlobalNavigationBarItemWrapper className={classNames({ active })}>
			<GlobalNavigationBarItemIcon />
			<GlobalNavigationBarItemLabel>{label}</GlobalNavigationBarItemLabel>
		</GlobalNavigationBarItemWrapper>
	);
};

export default GlobalNavigationBarItem;
