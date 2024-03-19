// import cookieModule from '@/module/cookie/cookie.module';
// import { apiService } from '@/services';
import { useQuery } from '@tanstack/react-query';

const useUserRefresh = () => {
	return useQuery({
		...userRefreshQueryFactory(),
	});
};

export default useUserRefresh;

export const userRefreshQueryFactory = () => ({
	queryKey: ['users/refresh'],
	queryFn: async () => {
		// const refreshToken = cookieModule.getItem('refreshToken');
		// if (refreshToken) {
		// 	const response = await apiService.postUsersRefresh({
		// 		refreshToken,
		// 	});
		// 	return response.data;
		// } else {
		// 	return null;
		// }
	},
});
