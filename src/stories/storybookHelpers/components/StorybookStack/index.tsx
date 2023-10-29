import styled, { css } from 'styled-components';

type DirectionVariant = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type JustifyContentVariant =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly';

type AlignItemsVariant =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'baseline'
	| 'stretch';

type SpacingVariant = `${number}px` | `${number}rem` | `${number}em`;

type StorybookStackProps = {
	direction: DirectionVariant;
	margin?: SpacingVariant;
	gap?: SpacingVariant;
	justifyContent?: JustifyContentVariant;
	alignItems?: AlignItemsVariant;
};

const marginMap = {
	row: 'margin-left',
	'row-reverse': 'margin-right',
	column: 'margin-top',
	'column-reverse': 'margin-bottom',
} as const;

const StorybookStack = styled.div<StorybookStackProps>`
	${({ direction, margin, gap, justifyContent, alignItems }) => css`
		display: flex;
		flex-direction: ${direction};

		${() => {
			if (margin) {
				return css`
					& > :not(style):not(style) {
						${marginMap[direction]}: 0;
					}
					& > :not(style) ~ :not(style) {
						${marginMap[direction]}: ${margin};
					}
				`;
			}

			if (gap) {
				return css`
					gap: ${gap};
				`;
			}

			if (justifyContent) {
				return css`
					justify-content: ${justifyContent};
				`;
			}

			if (alignItems) {
				return css`
					align-items: ${alignItems};
				`;
			}
		}}
	`}
`;

export default StorybookStack;
