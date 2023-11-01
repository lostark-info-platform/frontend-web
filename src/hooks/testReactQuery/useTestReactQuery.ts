import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';

const testReactQueryFactory = (id: string) => ({
	queryKey: ['testReactQuery', id],
	queryFn: () => api.getTestReactQuery({ id }),
});

const useTestReactQuery = ({ id }: { id: string }) => {
	const { data } = useQuery({
		...testReactQueryFactory(id),
		throwOnError: true,
	});

	return {
		data,
	};
};

useTestReactQuery.queryFactory = (id: string) => testReactQueryFactory(id);

export default useTestReactQuery;
