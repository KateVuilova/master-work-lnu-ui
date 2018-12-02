import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter } from 'react-router-dom';
import Navigation from './Navigation';

storiesOf('2. Molecules / Navigation', module).add('default', () => (
  <StaticRouter>
    <Navigation />
  </StaticRouter>
));
