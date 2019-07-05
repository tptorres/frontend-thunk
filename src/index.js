import React from 'react';
import {render} from 'react-dom';
import MainApp from './MainApp';
import {Provider} from 'react-redux';
import myStore from './store';

const router = (
  <Provider store = {myStore}>
    <MainApp />
  </Provider>
);

render (router, document.getElementById('root'));
