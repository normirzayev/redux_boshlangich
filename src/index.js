import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"
import projectReducer from './redux/reduces/ProjectReducer';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

const data = createStore(projectReducer,  composeWithDevTools())
root.render(
  <Provider store={data}>
      <App />
  </Provider>
);