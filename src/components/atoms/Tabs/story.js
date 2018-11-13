import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Tabs from './Tabs';
import { tabsContent, tabsTitles as _tabsTitles } from './TestData';

const tabsTitles = [
	text(_tabsTitles[0], 'Create'),
	text(_tabsTitles[1], 'Practice'),
];

storiesOf('1. Atoms / Tabs', module)
	.add('default', () => (
		<Tabs
			tabNames={['tab1', 'tab2']}
			tabs={['tab1 content', 'tab2 content']}
		/>
	))
	.add('with list of scenarios', () => (
		<Tabs
			tabNames={tabsTitles}
			tabs={tabsContent}
		/>
	));
