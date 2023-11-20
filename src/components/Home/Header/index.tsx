import {
	HeaderBottom,
	HeaderLogo,
	HeaderTop,
	HeaderWrapper,
} from './Header.styles';
import Avatar from '@/components/common/Avatar';
import AppGutter from '@/components/app/AppGutter';
import SearchBar from './SearchBar';

const Header = () => {
	return (
		<HeaderWrapper>
			<AppGutter>
				<HeaderTop>
					<HeaderLogo>LOAAK</HeaderLogo>
					<Avatar src='/assets/mock-images/mock-profile.png' />
				</HeaderTop>
				<HeaderBottom>
					<SearchBar />
				</HeaderBottom>
			</AppGutter>
		</HeaderWrapper>
	);
};

export default Header;
