import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './polyfills';
import configureStore, { createInitialStore } from './redux/store';

import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const reduxInitialState = createInitialStore();
const store = configureStore(reduxInitialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
