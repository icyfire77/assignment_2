import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({reducer: rootReducer});

function checkStore() {
   //console.log(store.getState().updateForms);
}
setInterval(checkStore, 500);

export function getForms() {
  return store.getState().updateForms;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
//StrictMode is a dev tool used for highlighting problematic code in React
