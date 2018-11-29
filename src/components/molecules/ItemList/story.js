import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemList from './ItemList';
import { list } from './testData';

storiesOf('2. Molecules / ItemList', module).add('default', () => (
  <ItemList list={list} />
));
