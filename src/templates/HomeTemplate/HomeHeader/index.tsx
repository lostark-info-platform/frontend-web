import {
	HomeHeaderBottom,
	HomeHeaderTop,
	HomeHeaderWrapper,
} from './HomeHeader.styles';
import Avatar from '@/components/common/Avatar';
import AppGutter from '@/components/common/AppGutter';
import SearchBar from './SearchBar';
import Image from 'next/image';

const HomeHeader = () => {
	return (
		<HomeHeaderWrapper>
			<AppGutter>
				<HomeHeaderTop>
					<Image
						width={112}
						height={24}
						alt='로고'
						src={'/assets/common/title-logo.svg'}
					/>
					<Avatar src='/assets/mock-images/mock-profile.png' />
				</HomeHeaderTop>
				<HomeHeaderBottom>
					<SearchBar />
				</HomeHeaderBottom>
			</AppGutter>
		</HomeHeaderWrapper>
	);
};

export default HomeHeader;
