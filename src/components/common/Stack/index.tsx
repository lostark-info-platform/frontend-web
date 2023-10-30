import styled, { css } from 'styled-components';

export type StackDirectionVariant =
	| 'row'
	| 'row-reverse'
	| 'column'
	| 'column-reverse';
export type StackJustifyContentVariant =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly';

export type StackAlignItemsVariant =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'baseline'
	| 'stretch';

export type StackSpacingVariant =
	| `${number}px`
	| `${number}rem`
	| `${number}em`;

type StackProps = {
	/** 쌓이는 방향 */
	direction: StackDirectionVariant;
	/** 쌓이는 margin 간격 */
	margin?: StackSpacingVariant;
	/** 쌓이는 gap 간격 */
	gap?: StackSpacingVariant;
	/** 콘텐츠 항목 사이와 주위 공간 분배 */
	justifyContent?: StackJustifyContentVariant;
	/** 콘텐츠 아이템 항목 사이와 주위 공간 분배 */
	alignItems?: StackAlignItemsVariant;
};

const stackDirectionForMarginMap = {
	row: 'margin-left',
	'row-reverse': 'margin-right',
	column: 'margin-top',
	'column-reverse': 'margin-bottom',
} as const;

const Stack = styled.div<StackProps>`
	${({ direction, margin, gap, justifyContent, alignItems }) => css`
		display: flex;
		flex-direction: ${direction};

		${() => {
			if (margin) {
				return css`
					& > :not(style):not(style) {
						${stackDirectionForMarginMap[direction]}: 0;
					}
					& > :not(style) ~ :not(style) {
						${stackDirectionForMarginMap[direction]}: ${margin};
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

export default Stack;
