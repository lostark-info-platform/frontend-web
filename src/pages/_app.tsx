import GlobalStyle from '@/core/GlobalStyle';
import type { AppContext, AppProps } from 'next/app';
import '@/recoil/config';

import { RecoilRoot } from 'recoil';
import { extractFromCookie } from '@/theme/utils/cookie.util';
import { ThemeMode } from '@/theme/sementicColor.theme';
import {
	darkModeSystemThemeSelector,
	darkModeThemeSelector,
} from '@/recoil/common/darkMode';
import LoadTheme from '@/core/LoadTheme';

type Props = {
	themeMode: ThemeMode | null;
};
export default function App({ Component, pageProps }: AppProps<Props>) {
	const themeMode = pageProps.themeMode;

	return (
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
	);
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
	let pageProps = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	const themeMode = extractFromCookie(ctx.req?.headers.cookie, 'theme');

	pageProps = {
		...pageProps,
		themeMode,
	};
	return {
		pageProps,
	};
};
