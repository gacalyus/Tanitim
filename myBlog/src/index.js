import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CommentLayer } from './Comments/context/CommentsContext';
import reducer, { initialState } from './Comments/context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <CommentLayer initialState={initialState} reducer={reducer}>
      <App />
    </CommentLayer>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
