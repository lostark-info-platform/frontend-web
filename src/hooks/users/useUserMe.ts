import { apiService } from '@/services';
import { useQuery } from '@tanstack/react-query';

const useUserMe = () => {
	return useQuery({
		...userMeQueryFactory(),
	});
};

export default useUserMe;

export const userMeQueryFactory = () => ({
	queryKey: ['users/me'],
	queryFn: async () => {
		const response = await apiService.getUsersMe();
		return response.data;
	},
});
