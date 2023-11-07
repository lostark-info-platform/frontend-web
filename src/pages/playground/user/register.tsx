import useUserRegister from '@/hooks/users/useUserRegister';
import { RequestUsersRegister } from '@/services/api/dataModels/dataModels.types';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

const PlaygroundUserRegisterPage = () => {
	const router = useRouter();
	const userRegister = useUserRegister();
	const [userRegisterForm, setUserRegisterForm] =
		useState<RequestUsersRegister>({
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		});

	const handleUserRegisterForm = <P extends keyof RequestUsersRegister>(
		formKey: P,
		value: RequestUsersRegister[P]
	) => {
		setUserRegisterForm((prev) => ({
			...prev,
			[formKey]: value,
		}));
	};

	const handleChangeFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		handleUserRegisterForm(name as keyof RequestUsersRegister, value);
	};

	const handleClickRegister = () => {
		userRegister.mutate(userRegisterForm, {
			onSuccess() {
				alert('회원가입 성공');
				router.replace('/');
			},
			onError(error) {
				console.error('error: ', error);
			},
		});
	};

	return (
		<Wrapper>
			<Header>회원가입</Header>
			<Input
				name='name'
				type='text'
				placeholder='name'
				onChange={handleChangeFormInput}
			/>
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
			<Input
				name='confirmPassword'
				type='password'
				placeholder='confirmPassword'
				onChange={handleChangeFormInput}
			/>
			<Button
				onClick={handleClickRegister}
				disabled={userRegister.isPending}
			>
				가입하기
			</Button>
		</Wrapper>
	);
};

export default PlaygroundUserRegisterPage;

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
