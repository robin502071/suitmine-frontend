import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
