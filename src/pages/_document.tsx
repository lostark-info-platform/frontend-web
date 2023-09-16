import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	function prettierTest() {
		console.log('em');
	}
	return (
		<Html lang='en'>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
