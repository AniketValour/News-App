import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Ensure index.css is available for global styles
import App from './App'; // Ensure the file name and path are correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
