import {
	BackTemplateHeaderBackButton,
	BackTemplateHeaderWrapper,
	BackTemplateMain,
	BackTemplateWrapper,
} from './BackTemplate.styles';
import { PropsWithChildren } from 'react';
import Icon from '@/components/common/Icon';

type BackTemplateProps = {
	onBack?: () => void;
};
function BackTemplate({
	onBack,
	children,
}: PropsWithChildren<BackTemplateProps>) {
	return (
		<BackTemplateWrapper>
			<BackTemplateHeaderWrapper as={'header'}>
				<BackTemplateHeaderBackButton onClick={() => onBack?.()}>
					<Icon variant='ChevronLeft' size={24} />
				</BackTemplateHeaderBackButton>
			</BackTemplateHeaderWrapper>
			<BackTemplateMain>{children}</BackTemplateMain>
		</BackTemplateWrapper>
	);
}

export default BackTemplate;
