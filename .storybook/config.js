import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import '../public/css/reboot.css';
import '../public/css/storybook.css';

addDecorator(withKnobs);

const req = require.context('../src', true, /story\.js$/);
const loadStories = () => req.keys().forEach(req);

configure(loadStories, module);
