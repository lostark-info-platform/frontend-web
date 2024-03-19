import Tabs from '@/components/common/Tabs';
import { Meta, StoryFn } from '@storybook/react';

const meta = {
	title: 'Components/common/Tabs',
	component: Tabs,
	args: {
		defaultTabId: '콘텐츠',
		tabList: [
			{
				label: '콘텐츠',
				id: '콘텐츠',
			},
			{
				label: '레이드',
				id: '레이드',
			},
		],
		onChangeTab: () => {},
	},
} as Meta<typeof Tabs>;

export default meta;

const Template: StoryFn<typeof Tabs> = (props) => <Tabs {...props} />;

export const Default = Template.bind({});
