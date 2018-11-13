import React from 'react';
import { shallow } from 'enzyme';

import Tabs from './Tabs';
import { tabsContent, tabsTitles } from './TestData';

describe('Atom - Tabs', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<Tabs
				tabNames={tabsTitles}
				tabs={tabsContent}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
