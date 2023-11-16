import { apiService } from '@/services';
import { useSuspenseQuery } from '@tanstack/react-query';

const useUserInfo = () => {
	return useSuspenseQuery({
		...userInfoQueryFactory(),
	});
};

export default useUserInfo;

export const userInfoQueryFactory = () => ({
	queryKey: ['users/me'],
	queryFn: async () => {
		const response = await apiService.getUsersMe();
		return response.data;
	},
});
