import Heading from '@/components/common/Heading';
import StorybookStack from '@/stories/storybookHelpers/components/StorybookStack';
import themeTypography from '@/theme/typography.theme';
import { Meta, StoryFn } from '@storybook/react';

const meta = {
	title: 'Design System/Components/common/Heading',
	Component: Heading,
} as Meta<typeof Heading>;

export default meta;

export const Basics: StoryFn = () => {
	return (
		<StorybookStack direction='column' gap='20px'>
			{Object.keys(themeTypography['heading'])
				.map((value) => Number(value))
				.sort((a, b) => b - a)
				.map((size) => {
					const numSize =
						size as unknown as keyof (typeof themeTypography)['heading'];
					return (
						<Heading size={numSize} key={size}>
							Heading {size}
						</Heading>
					);
				})}
		</StorybookStack>
	);
};

export const Color = () => {
	return (
		<Heading color='semanticColor.secondary' size={36}>
			color
		</Heading>
	);
};
