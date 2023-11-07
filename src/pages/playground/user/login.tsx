import useUserLogin from '@/hooks/users/useUserLogin';
import { RequestUsersLogin } from '@/services/api/dataModels/dataModels.types';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

const PlaygroundUserLoginPage = () => {
	const router = useRouter();
	const userLogin = useUserLogin();
	const [userLoginForm, setUserLoginForm] = useState<RequestUsersLogin>({
		email: '',
		password: '',
	});

	const handleUserLoginForm = <P extends keyof RequestUsersLogin>(
		formKey: P,
		value: RequestUsersLogin[P]
	) => {
		setUserLoginForm((prev) => ({
			...prev,
			[formKey]: value,
		}));
	};

	const handleChangeFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		handleUserLoginForm(name as keyof RequestUsersLogin, value);
	};

	const handleClickLogin = () => {
		userLogin.mutate(userLoginForm, {
			onSuccess() {
				alert('로그인 성공');
				router.replace('/playground/user/me');
			},
			onError(error) {
				console.error('error: ', error);
			},
		});
	};
	return (
		<Wrapper>
			<Header>로그인</Header>
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
			<Button onClick={handleClickLogin} disabled={userLogin.isPending}>
				로그인하기
			</Button>
		</Wrapper>
	);
};

export default PlaygroundUserLoginPage;

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
