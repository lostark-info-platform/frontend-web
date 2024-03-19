import { PropsWithChildren, ReactNode } from 'react';
import {
	MobileLayoutContent,
	MobileLayoutHeaderColumn,
	MobileLayoutHeaderIconButtonWrapper,
	MobileLayoutHeaderTitle,
	MobileLayoutHeaderWrapper,
	MobileLayoutWrapper,
} from './MobileLayout.styles';
import Icon, { IconVariant } from '../Icon';

function MobileLayout({ children }: PropsWithChildren) {
	return <MobileLayoutWrapper>{children}</MobileLayoutWrapper>;
}

type MobileLayoutHeaderProps = {
	left?: ReactNode;
	center?: ReactNode;
	right?: ReactNode;
};

function MobileLayoutHeader({ left, center, right }: MobileLayoutHeaderProps) {
	return (
		<MobileLayoutHeaderWrapper>
			<MobileLayoutHeaderColumn className='mobile-layout__header-column-left'>
				{left}
			</MobileLayoutHeaderColumn>
			<MobileLayoutHeaderColumn className='mobile-layout__header-column-center'>
				{center}
			</MobileLayoutHeaderColumn>
			<MobileLayoutHeaderColumn className='mobile-layout__header-column-right'>
				{right}
			</MobileLayoutHeaderColumn>
		</MobileLayoutHeaderWrapper>
	);
}

type MobileLayoutHeaderIconButtonProps = {
	variant: IconVariant;
	onClick?: () => void;
};
function MobileLayoutHeaderIconButton({
	variant,
	onClick,
}: MobileLayoutHeaderIconButtonProps) {
	return (
		<MobileLayoutHeaderIconButtonWrapper onClick={() => onClick?.()}>
			<Icon variant={variant} size={24} />
		</MobileLayoutHeaderIconButtonWrapper>
	);
}

export default Object.assign(MobileLayout, {
	Header: MobileLayoutHeader,
	HeaderTitle: MobileLayoutHeaderTitle,
	HeaderIconButton: MobileLayoutHeaderIconButton,
	Content: MobileLayoutContent,
});
