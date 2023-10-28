import Heading from '@/components/common/Heading';
import themeTypography from '@/theme/typography.theme';
import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

const meta = {
	title: 'Design System/Components/common/Heading',
	Component: Heading,
} as Meta<typeof Heading>;

export default meta;

export const Basics: StoryFn = () => {
	return (
		<Stack>
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
		</Stack>
	);
};

const Stack = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
