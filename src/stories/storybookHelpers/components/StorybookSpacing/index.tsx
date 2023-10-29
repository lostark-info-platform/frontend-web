import styled from 'styled-components';

type StorybookSpacing = {
	direction: 'horizontal' | 'vertical';
	spacing: `${number}px` | `${number}rem` | `${number}em`;
};

const directionMap = {
	horizontal: 'width',
	vertical: 'height',
} as const;

const StorybookSpacing = styled.span<StorybookSpacing>`
	display: block;

	${({ direction, spacing }) => {
		return `
      ${directionMap[direction]}: ${spacing};
    `;
	}}
`;

export default StorybookSpacing;
