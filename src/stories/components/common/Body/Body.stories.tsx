import Body from '@/components/common/Body';
import themeTypography from '@/theme/typography.theme';
import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

const meta = {
	title: 'Design System/Components/common/Body',
	Component: Body,
} as Meta<typeof Body>;

export default meta;

export const Basics: StoryFn = () => {
	return (
		<Stack>
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
		</Stack>
	);
};

const Stack = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
