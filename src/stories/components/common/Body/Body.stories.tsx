import Body from '@/components/common/Body';
import StorybookStack from '@/stories/storybookHelpers/components/StorybookStack';
import themeTypography from '@/theme/typography.theme';
import { Meta, StoryFn } from '@storybook/react';

const meta = {
	title: 'Design System/Components/common/Body',
	Component: Body,
} as Meta<typeof Body>;

export default meta;

export const Basics: StoryFn = () => {
	return (
		<StorybookStack direction='column' gap='20px'>
			{Object.keys(themeTypography['body'])
				.map((value) => Number(value))
				.sort((a, b) => b - a)
				.map((size) => {
					const numSize =
						size as unknown as keyof (typeof themeTypography)['body'];
					return (
						<Body size={numSize} key={size}>
							Body {size}
						</Body>
					);
				})}
		</StorybookStack>
	);
};

export const Color = () => {
	return (
		<Body color='semanticColor.secondary' size={18}>
			color
		</Body>
	);
};
