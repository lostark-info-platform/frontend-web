import useThemeEffect from '@/hooks/common/useThemeEffect';
import { darkModeThemeSelector } from '@/recoil/common/darkMode';
import GlobalStyles from '@/styles/Global';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { RecoilRoot, useSetRecoilState } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<GlobalStyles />
			<LoadTheme />
			<Component {...pageProps} />
		</RecoilRoot>
	);
}

const LoadTheme = () => {
	const setDarkModeTheme = useSetRecoilState(darkModeThemeSelector);

	useThemeEffect();

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (!theme) return;
		if (theme === 'dark') {
			setDarkModeTheme('dark');
		} else {
			setDarkModeTheme('light');
		}
		document.body.dataset.theme = theme;
	}, []);

	return <></>;
};
