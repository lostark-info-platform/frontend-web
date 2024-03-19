import { PropsWithChildren } from 'react';
import styled, { CSSProperties } from 'styled-components';

type FlexProps = {
	alignItems?: CSSProperties['alignItems'];
	flexDirection?: CSSProperties['flexDirection'];
	justifyContent?: CSSProperties['justifyContent'];
	gap?: CSSProperties['gap'];
	width?: CSSProperties['width'];
};

type StyledFlexProps<P extends keyof FlexProps> = Record<`$${P}`, FlexProps[P]>;

const Flex = ({
	children,
	alignItems,
	flexDirection,
	justifyContent,
	gap,
	width,
}: PropsWithChildren<FlexProps>) => {
	return (
		<StyledFlex
			$alignItems={alignItems}
			$flexDirection={flexDirection}
			$justifyContent={justifyContent}
			$gap={gap}
			$width={width}
		>
			{children}
		</StyledFlex>
	);
};

const StyledFlex = styled.div<StyledFlexProps<keyof FlexProps>>`
	display: flex;
	justify-content: ${({ $justifyContent }) => $justifyContent || 'start'};
	align-items: ${({ $alignItems }) => $alignItems || 'start'};
	flex-direction: ${({ $flexDirection }) => $flexDirection || 'row'};
	gap: ${({ $gap }) => ($gap && $gap + 'px') || '0px'};
	width: ${({ $width }) => $width};
`;

export default Flex;
