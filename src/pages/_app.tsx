import { useState } from 'react';
import type { AppContext, AppProps } from 'next/app';
import '@/recoil/config';

import { RecoilRoot } from 'recoil';
import { ThemeMode } from '@/theme/sementicColor.theme';
import {
	darkModeSystemThemeSelector,
	darkModeThemeSelector,
} from '@/recoil/common/darkMode';
import GlobalStyle from '@/theme/initializeComponents/GlobalStyle';
import LoadThemeDarkMode from '@/theme/initializeComponents/LoadThemeDarkMode';
import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { cookieService } from '@/services';

type AppRootProps = {
	themeMode: ThemeMode | null;
	dehydratedState: unknown;
};

export default function App({ Component, pageProps }: AppProps<AppRootProps>) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: Infinity,
						retry: 0,
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
						<LoadThemeDarkMode />
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

	const themeMode = cookieService.getItemFromSSR(
		'theme',
		ctx.req?.headers.cookie
	);

	return {
		pageProps: {
			...pageProps,
			themeMode,
		},
	};
};
