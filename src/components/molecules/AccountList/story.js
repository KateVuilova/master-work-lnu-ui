import React from 'react';
import { storiesOf } from '@storybook/react';
import AccountList from './AccountList';

const list = [{
  id: '8582498203',
  balance: '100000$',
  type: 'Credit',
}, {
  id: '8472069205',
  balance: '100000$',
  type: 'Deposit',
}];

storiesOf('2. Molecules / AccountList', module).add('default', () => (
  <AccountList list={list} />
));
