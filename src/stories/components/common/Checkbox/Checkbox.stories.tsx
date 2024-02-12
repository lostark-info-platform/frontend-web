import Checkbox from '@/components/common/Checkbox';
import { Meta, StoryFn } from '@storybook/react';
// import { default as CheckboxIcon } from '@/assets/icons/checkbox.svg';
const meta = {
	title: 'Components/common/Checkbox',
	component: Checkbox,
	argTypes: {
		id: {
			defaultValue: 'checkbox',
		},
	},
} as Meta<typeof Checkbox>;

export default meta;

const Template: StoryFn<typeof Checkbox> = (props) => <Checkbox {...props} />;

export const Default = Template.bind({});
