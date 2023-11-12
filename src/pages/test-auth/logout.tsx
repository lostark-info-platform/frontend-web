import useUserLogout from '@/hooks/users/useUserLogout';
import styled from 'styled-components';

const TestAuthLogoutPage = () => {
	const userLogout = useUserLogout();
	return (
		<>
			<Button
				onClick={() => {
					userLogout.mutate();
				}}
			>
				로그아웃
			</Button>
		</>
	);
};

export default TestAuthLogoutPage;

const Button = styled.button`
	font-weight: 600;
	font-size: 16px;
	height: 56px;
	background-color: #136df5;
	color: #fff;
	border-radius: 8px;
	border: 0;
	outline: 0;
`;
