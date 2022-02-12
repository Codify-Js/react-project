import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import './index.css';
import Routing from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
 <Provider store={store}>
  <BrowserRouter>
    <Routing/>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
