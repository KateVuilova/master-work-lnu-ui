import React from 'react';
import { storiesOf } from '@storybook/react';
import Transaction from './Transaction';

storiesOf('1. Atoms / Transaction', module).add('default', () => (
  <Transaction
    id='25c519d0-6fd9-4f1c-bf3b-aa519b844331'
    amount='100000$'
    status='Sent'
    date='28.09.09'
  />
));
