import React from 'react';

import GlobalStyle from '../src/theme/initializeComponents/GlobalStyle';
import LoadThemeDarkMode from '../src/theme/initializeComponents/LoadThemeDarkMode';
import { Preview } from '@storybook/react';
import { RecoilRoot } from 'recoil';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		toolbar: {
			'storybook/background': { hidden: true },
			'storybook/viewport': { hidden: true },
			'storybook/measureEnabled': { hidden: true },
			'storybook/outline': { hidden: true },
			'storybook/grid': { hidden: true },
		},
	},
	decorators: [
		(Story) => (
			<>
				<RecoilRoot>
					<GlobalStyle />
					<LoadThemeDarkMode />
					<Story />
				</RecoilRoot>
			</>
		),
	],
};

export default preview;
