import type { AppContext, AppProps } from 'next/app';
import '@/recoil/config';

import { RecoilRoot } from 'recoil';
import { extractFromCookie } from '@/theme/utils/cookie.util';
import { ThemeMode } from '@/theme/sementicColor.theme';
import {
	darkModeSystemThemeSelector,
	darkModeThemeSelector,
} from '@/recoil/common/darkMode';
import GlobalStyle from '@/theme/initialize/GlobalStyle';
import LoadTheme from '@/theme/initialize/LoadTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorBoundary from '@/components/common/ErrorBoundary';

type Props = {
	themeMode: ThemeMode | null;
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps<Props>) {
	const themeMode = pageProps.themeMode;

	return (
		<ErrorBoundary>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot
					initializeState={({ set }) => {
						if (!themeMode) return;
						set(darkModeThemeSelector, themeMode);
						set(darkModeSystemThemeSelector, themeMode);
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
