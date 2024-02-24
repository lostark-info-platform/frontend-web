import {
	BackTemplateHeaderBackButton,
	BackTemplateHeaderWrapper,
	BackTemplateMain,
	BackTemplateWrapper,
} from './BackTemplate.styles';
import { PropsWithChildren } from 'react';
import Image from 'next/image';
import AppGutter from '@/components/common/AppGutter';

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
				<AppGutter>
					<BackTemplateHeaderBackButton onClick={() => onBack?.()}>
						<Image
							src={'/assets/common/back.svg'}
							width={11}
							height={22}
							alt='back'
						/>
					</BackTemplateHeaderBackButton>
				</AppGutter>
			</BackTemplateHeaderWrapper>
			<BackTemplateMain>{children}</BackTemplateMain>
		</BackTemplateWrapper>
	);
}

export default BackTemplate;
