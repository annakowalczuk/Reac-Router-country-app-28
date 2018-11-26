import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import {getCountries} from './actions/actions';
import { Router, hashHistory } from 'react-router/lib';
import routes from './routes';
import './country.css'

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}>
    </Router>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(getCountries());
