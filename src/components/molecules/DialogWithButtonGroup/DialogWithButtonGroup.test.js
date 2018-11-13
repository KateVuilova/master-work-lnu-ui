import React from 'react';
import { mount } from 'enzyme';

import DialogWithButtonGroup from './DialogWithButtonGroup';

describe('Atom - DialogWithButtonGroup', () => {

	it('Should render', () => {
		global.HTMLDialogElement = true;
		const wrapper = mount(
			<DialogWithButtonGroup
				actionButtonLabel='Action button'
				cancelButtonLabel='Cancel button'
			>
				DialogWithButtonGroup content
			</DialogWithButtonGroup>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
