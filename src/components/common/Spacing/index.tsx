import styled, { css } from 'styled-components';

import themeSpacing from '@/theme/spacing.theme';
type SpacingProps = {
	direction?: 'vertical' | 'horizontal';
	size: (typeof themeSpacing)[number];
};
const Spacing = styled.div<SpacingProps>`
	${({ direction = 'vertical', size }) => {
		if (direction === 'vertical') {
			return css`
				height: ${size}px;
				width: 100%;
			`;
		} else {
			return css`
				width: ${size}px;
				height: 100%;
			`;
		}
	}}
`;

export default Spacing;
