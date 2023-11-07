import useUserMe from '@/hooks/users/useUserMe';
import { userMeQueryFactory } from '@/hooks/users/useUserMe';
import { useRouter } from 'next/router';
import enhanceGetServerSideProps from '@/services/next/enhanceGetServerSideProps';

const PlaygroundUserMe = () => {
	const { data: userMeInfo } = useUserMe();

	const router = useRouter();
	return (
		<div>
			<button
				onClick={() => {
					router.push('/playground/user/change-test');
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

export default PlaygroundUserMe;

export const getServerSideProps = enhanceGetServerSideProps({
	ssrCallback: async ({ queryClient }) => {
		await queryClient.prefetchQuery({
			...userMeQueryFactory(),
		});
	},
});
