import MyScheduleCard from '@/components/Home/common/MyScheduleCard';
import { Meta, StoryFn } from '@storybook/react';

const meta = {
	title: 'Components/Home/common/MyScheduleCard',
	Component: MyScheduleCard,
} as Meta<typeof MyScheduleCard>;

export default meta;

const Template: StoryFn<typeof MyScheduleCard> = () => <MyScheduleCard />;

export const Default = Template.bind({});
