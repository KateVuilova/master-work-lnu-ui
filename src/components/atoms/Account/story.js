import React from 'react';
import { storiesOf } from '@storybook/react';
import Account from './Account';

storiesOf('1. Atoms / Account', module).add('default', () => (
  <Account
    id='25c519d0-6fd9-4f1c-bf3b-aa519b844331'
    balance='100000$'
    type='Credit'
  />
));
