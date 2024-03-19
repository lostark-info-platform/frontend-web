import classNames from 'classnames';
import { ButtonTabButton, ButtonTabsWrapper } from './ButtonTabs.styles';
import { PropsWithChildren, useState } from 'react';

type ButtonTabsProps = {
	defaultTabId: string;
	tabList: { label: string; id: string }[];
	onChangeTab?: (tabId: string) => void;
};
function ButtonTabs({ defaultTabId, tabList, onChangeTab }: ButtonTabsProps) {
	const [currentTabId, setCurrentTabId] = useState(defaultTabId);
	return (
		<ButtonTabsWrapper>
			{tabList.map(({ label, id }) => (
				<ButtonTab
					key={id}
					isActive={currentTabId === id}
					onClick={() => {
						setCurrentTabId(id);
						onChangeTab?.(id);
					}}
				>
					{label}
				</ButtonTab>
			))}
		</ButtonTabsWrapper>
	);
}

export default ButtonTabs;

type ButtonTabProps = {
	onClick: () => void;
	isActive: boolean;
};
function ButtonTab({
	onClick,
	isActive,
	children,
}: PropsWithChildren<ButtonTabProps>) {
	return (
		<ButtonTabButton
			className={classNames({
				active: isActive,
			})}
			onClick={onClick}
		>
			{children}
		</ButtonTabButton>
	);
}
