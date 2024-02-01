import { getOAuth2Code } from '@/utils/auth/oauth2';
import styled from 'styled-components';

const AuthLoginPage = () => {
	return (
		<Wrapper>
			<Anchor
				style={{
					background: 'white',
					border: '1px solid #bdbdbd',
					color: '#272727',
				}}
				href={getOAuth2Code({
					provider: 'google',
					redirectTo: '/',
				})}
			>
				구글
			</Anchor>
			<Anchor
				style={{
					background: 'yellow',
					color: '#000',
				}}
				href={getOAuth2Code({
					provider: 'kakao',
					redirectTo: '/auth/user',
				})}
			>
				카카오
			</Anchor>
		</Wrapper>
	);
};

export default AuthLoginPage;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	max-width: 420px;
	margin: 0 auto;
	padding: 120px 0;
`;
const Anchor = styled.a`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	font-weight: 600;
	font-size: 16px;
	height: 56px;
	color: #fff;
	border-radius: 8px;
	border: 0;
	outline: 0;
`;
