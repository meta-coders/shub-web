import React from 'react';
import ReactDOM from 'react-dom';
import { jss } from 'react-jss';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import App from './App';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
