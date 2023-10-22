import type { AppContext, AppProps } from 'next/app';
import '@/recoil/config';

import { RecoilRoot } from 'recoil';
import { extractFromCookie } from '@/theme/utils/cookie.util';
import { ThemeMode } from '@/theme/sementicColor.theme';
import {
	darkModeSystemThemeSelector,
	darkModeThemeSelector,
} from '@/recoil/common/darkMode';
import GlobalStyle from '@/theme/initializeComponents/GlobalStyle';
import LoadTheme from '@/theme/initializeComponents/LoadTheme';
import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { useState } from 'react';

type Props = {
	themeMode: ThemeMode | null;
	dehydratedState: unknown;
};

export default function App({ Component, pageProps }: AppProps<Props>) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: Infinity,
						retry: 1,
					},
				},
			})
	);

	return (
		<ErrorBoundary>
			<QueryClientProvider client={queryClient}>
				<HydrationBoundary state={pageProps.dehydratedState}>
					<RecoilRoot
						initializeState={({ set }) => {
							initialRecoilStateForThemeMode();

							function initialRecoilStateForThemeMode() {
								const themeMode = pageProps.themeMode;
								if (!themeMode) return;
								set(darkModeThemeSelector, themeMode);
								set(darkModeSystemThemeSelector, themeMode);
							}
						}}
					>
						<GlobalStyle />
						<LoadTheme />
						<Component {...pageProps} />
					</RecoilRoot>
					<ReactQueryDevtools
						initialIsOpen={false}
						buttonPosition='bottom-left'
					/>
				</HydrationBoundary>
			</QueryClientProvider>
		</ErrorBoundary>
	);
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
	let pageProps = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	const themeMode = extractFromCookie(ctx.req?.headers.cookie, 'theme');

	return {
		pageProps: {
			...pageProps,
			themeMode,
		},
	};
};
