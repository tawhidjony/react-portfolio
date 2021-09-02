import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div style={{backgroundImage:"url:('https://images.unsplash.com/photo-1519644473771-e45d361c9bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80)"}} className="h-screen max-h-screen p-10 ">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


