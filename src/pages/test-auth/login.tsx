import useUserLogin from '@/hooks/users/useUserLogin';
import enhanceGetServerSideProps from '@/libs/next/enhanceGetServerSideProps';
import { RequestUsersLogin } from '@/services/api/types/models.types';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

const TestAuthLoginPage = () => {
	return (
		<Wrapper>
			<CredentialsSignin />
		</Wrapper>
	);
};

const CredentialsSignin = () => {
	const router = useRouter();
	const userLogin = useUserLogin();
	const [userSigninForm, setUserSigninForm] = useState<RequestUsersLogin>({
		email: '',
		password: '',
	});

	const handleUserLoginForm = <P extends keyof RequestUsersLogin>(
		formKey: P,
		value: RequestUsersLogin[P]
	) => {
		setUserSigninForm((prev) => ({
			...prev,
			[formKey]: value,
		}));
	};

	const handleChangeFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		handleUserLoginForm(name as keyof RequestUsersLogin, value);
	};

	const handleSignin = (e: any) => {
		e.preventDefault();
		userLogin.mutate(
			{
				email: userSigninForm.email,
				password: userSigninForm.password,
			},
			{
				onSuccess() {
					router.replace('/test-auth');
				},
			}
		);
		return false;
	};
	return (
		<>
			<Header>로그인</Header>
			<Form onSubmit={handleSignin}>
				<Input
					name='email'
					type='email'
					placeholder='email'
					onChange={handleChangeFormInput}
				/>
				<Input
					name='password'
					type='password'
					placeholder='password'
					onChange={handleChangeFormInput}
				/>
				<Button type='submit'>로그인</Button>
			</Form>
		</>
	);
};

export default TestAuthLoginPage;

export const getServerSideProps = enhanceGetServerSideProps({
	permissions: {
		user: true,
	},
});

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	max-width: 420px;
	margin: 0 auto;
	padding: 120px 0;
`;
const Header = styled.h1`
	font-size: 32px;
	font-weight: 600;
	text-align: center;
	color: #000;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
const Input = styled.input`
	font-size: 16px;
	height: 56px;
	border-radius: 8px;
	border: 0;
	outline: 0;
	border: 1px solid #959595;
	padding: 0 12px;
	&::placeholder {
		color: #959595;
	}
`;
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
