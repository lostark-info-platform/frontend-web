import useUserInfo from '@/hooks/users/useUserInfo';
import enhanceGetServerSideProps from '@/libs/next/enhanceGetServerSideProps';
import { useRouter } from 'next/router';
import { Suspense } from 'react';

const TestAuthPage = () => {
	const router = useRouter();
	return (
		<>
			<Suspense fallback={<p>loading....</p>}>
				<UserInfo />
			</Suspense>
			<button onClick={() => router.push('/test-auth/change')}>
				바꾸기
			</button>
		</>
	);
};

export default TestAuthPage;

const UserInfo = () => {
	const { data: userInfo } = useUserInfo();
	return (
		<div>
			<p>{userInfo?.email}</p>
		</div>
	);
};

export const getServerSideProps = enhanceGetServerSideProps();
