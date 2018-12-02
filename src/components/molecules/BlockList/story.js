import React from 'react';
import { storiesOf } from '@storybook/react';
import BlockList from './BlockList';

const list = [{
  date: '29.09.2018',
  hash: '25c589d0-6fd9-4f1c-bf3b-aa519b344331',
  miner: '25c219d0-6fd9-4f1c-bf3b-aa549b844331',
}, {
  date: '29.09.2018',
  hash: '25c519w0-6fd9-4e1c-bf3b-aa519b644331',
  miner: '25c579d0-6fd9-431c-2f3b-aa519b644331',
}];

storiesOf('2. Molecules / BlockList', module).add('default', () => (
  <BlockList list={list} />
));
