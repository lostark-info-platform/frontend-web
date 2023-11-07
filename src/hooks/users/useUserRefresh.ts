import { apiService, cookieService } from '@/services';
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
		const refreshToken = cookieService.getItem('refreshToken');
		if (refreshToken) {
			const response = await apiService.postUsersRefresh({
				refreshToken,
			});
			return response.data;
		} else {
			return null;
		}
	},
});
