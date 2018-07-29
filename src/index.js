import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import App from './App';

import reducers from './store/reducers';

import './index.scss';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root')
);
// registerServiceWorker();
