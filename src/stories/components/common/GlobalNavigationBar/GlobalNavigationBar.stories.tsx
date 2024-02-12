import GlobalNavigationBar from '@/components/common/GlobalNavigationBar';
import { Meta, StoryFn } from '@storybook/react';

const meta = {
	title: 'Components/common/GlobalNavigationBar',
	Component: GlobalNavigationBar,
} as Meta<typeof GlobalNavigationBar>;

export default meta;

const Template: StoryFn<typeof GlobalNavigationBar> = () => (
	<GlobalNavigationBar />
);

export const Default = Template.bind({});
