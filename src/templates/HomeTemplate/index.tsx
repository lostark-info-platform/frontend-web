import GlobalNavigationBar from '@/components/common/GlobalNavigationBar';
import HomeHeader from './HomeHeader';
import {
	HomeTemplateFooter,
	HomeTemplateHeader,
	HomeTemplateMain,
	HomeTemplateWrapper,
} from './HomeTemplate.styles';
import { ReactNode } from 'react';

type HomeTemplateProps = {
	children?: ReactNode;
};
const HomeTemplate = ({ children }: HomeTemplateProps) => {
	return (
		<HomeTemplateWrapper>
			<HomeTemplateHeader>
				<HomeHeader />
			</HomeTemplateHeader>
			<HomeTemplateMain>{children}</HomeTemplateMain>
			<HomeTemplateFooter>
				<GlobalNavigationBar />
			</HomeTemplateFooter>
		</HomeTemplateWrapper>
	);
};

export default HomeTemplate;
