import HomeCalendarHeader from '@/components/Home/common/HomeCalendarHeader';
import { Meta, StoryFn } from '@storybook/react';

const meta = {
	title: 'Components/Home/common/HomeCalendarHeader',
	component: HomeCalendarHeader,
} as Meta<typeof HomeCalendarHeader>;

export default meta;

const Template: StoryFn<typeof HomeCalendarHeader> = () => (
	<HomeCalendarHeader />
);

export const Default = Template.bind({});
