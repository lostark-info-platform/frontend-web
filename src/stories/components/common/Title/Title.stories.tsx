import Title from '@/components/common/Title';
import StorybookStack from '@/stories/storybookHelpers/components/StorybookStack';
import themeTypography from '@/theme/typography.theme';
import { Meta, StoryFn } from '@storybook/react';

const meta = {
	title: 'Design System/Components/common/Title',
	Component: Title,
} as Meta<typeof Title>;

export default meta;

export const Basics: StoryFn = () => {
	return (
		<StorybookStack direction='column' gap='20px'>
			{Object.keys(themeTypography['title'])
				.map((value) => Number(value))
				.sort((a, b) => b - a)
				.map((size) => {
					const numSize =
						size as unknown as keyof (typeof themeTypography)['title'];
					return (
						<Title size={numSize} key={size}>
							Title {size}
						</Title>
					);
				})}
		</StorybookStack>
	);
};

export const Color = () => {
	return (
		<Title color='semanticColor.secondary' size={24}>
			color
		</Title>
	);
};
