import { useRouter } from 'next/router';
import enhanceGetServerSideProps from '@/services/next/enhanceGetServerSideProps';
import useUserMe from '@/hooks/users/useUserMe';

const PlaygroundChangeTestPage = () => {
	const { data: userMeInfo } = useUserMe();
	const router = useRouter();
	return (
		<div>
			<button
				onClick={() => {
					router.push('/playground/user/me');
				}}
			>
				이동
			</button>
			<div style={{ marginTop: 20 }}>
				<p>{userMeInfo?.email}</p>
			</div>
		</div>
	);
};

export default PlaygroundChangeTestPage;

export const getServerSideProps = enhanceGetServerSideProps();
