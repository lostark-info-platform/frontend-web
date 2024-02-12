import classNames from 'classnames';
import { TabButton, TabsWrapper } from './Tabs.styles';
import { PropsWithChildren, useState } from 'react';

type TabsProps = {
	defaultTabId: string;
	tabList: { label: string; id: string }[];
	onChangeTab?: (tabId: string) => void;
};
function Tabs({ defaultTabId, tabList, onChangeTab }: TabsProps) {
	const [currentTabId, setCurrentTabId] = useState(defaultTabId);
	return (
		<TabsWrapper>
			{tabList.map(({ label, id }) => (
				<Tab
					key={id}
					isActive={currentTabId === id}
					onClick={() => {
						setCurrentTabId(id);
						onChangeTab?.(id);
					}}
				>
					{label}
				</Tab>
			))}
		</TabsWrapper>
	);
}

export default Tabs;

type TabProps = {
	onClick: () => void;
	isActive: boolean;
};
function Tab({ onClick, isActive, children }: PropsWithChildren<TabProps>) {
	return (
		<TabButton
			className={classNames({
				active: isActive,
			})}
			onClick={onClick}
		>
			{children}
		</TabButton>
	);
}
