import React from 'react';
import { storiesOf } from '@storybook/react';
import QRCode from './QRCode';

storiesOf('1. Atoms / QRCode', module)
	.add('default', () => <QRCode  />);
