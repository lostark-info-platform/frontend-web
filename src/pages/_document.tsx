import { ThemeMode } from '@/theme/sementicColor.theme';
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

type Props = {
	themeMode: ThemeMode | null;
};

class MyDocument extends Document<Props> {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: [initialProps.styles, sheet.getStyleElement()],
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps as {
			themeMode: ThemeMode | null;
		};
		const themeMode = pageProps.themeMode;
		const bodyProps = themeMode ? { 'data-theme': themeMode } : {};

		return (
			<Html lang='ko'>
				<Head />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0 user-scalable=no'
				/>
				<body {...bodyProps}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
