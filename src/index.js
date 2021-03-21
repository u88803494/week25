// region 1. Platform Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
// end-region

// region 2. Project Libraries
import App from './App';
import reducers from './store/reducer'
// end-region

// region U. UI Markups
import './index.css';
// end-region

const store = createStore(reducers, applyMiddleware(ReduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App name="hugh" />
  </Provider>,
  document.getElementById('root')
);
