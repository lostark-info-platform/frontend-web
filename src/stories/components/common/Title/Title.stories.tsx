import Title from '@/components/common/Title';
import themeTypography from '@/theme/typography.theme';
import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

const meta = {
	title: 'Design System/Components/common/Title',
	Component: Title,
} as Meta<typeof Title>;

export default meta;

export const Basics: StoryFn = () => {
	return (
		<Stack>
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
		</Stack>
	);
};

const Stack = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
