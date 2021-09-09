import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './modules';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
//import { config } from './config/env';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import { ToastProvider } from 'react-toast-notifications';

const store = createStore(rootReducer, composeWithDevTools());

const client = new ApolloClient({
  uri: 'https://api-codingtest.codeuniv.kr/',
  cache: new InMemoryCache(),
  queryDeduplication: true,
  ssrMode: true,
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <ToastProvider placement="top-center">
        <React.StrictMode>
          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </React.StrictMode>
      </ToastProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
