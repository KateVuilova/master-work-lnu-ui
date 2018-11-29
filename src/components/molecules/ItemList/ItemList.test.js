import React from 'react';
import { shallow } from 'enzyme';
import ItemList from './ItemList';

describe('Molecule - ItemList', () => {
	it('Should render ItemList component', () => {
		const wrapper = shallow(
			<ItemList list={['', '']} />
		);
		expect(wrapper).toMatchSnapshot();
	});
});
