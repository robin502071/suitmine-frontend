import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
