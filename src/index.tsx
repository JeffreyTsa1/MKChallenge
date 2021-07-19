import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { MkForm } from './MkForm';

ReactDOM.render(
  <React.StrictMode>

    <div style={{ textAlign: "center" }}>
      <MkForm
        onSubmit={({name, email, msg}) => {
          fetch('https://52vgh03ao6.execute-api.us-west-1.amazonaws.com/Staging', {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({ name, msg, email })})
          fetch('https://ek0cvqnnja.execute-api.us-west-1.amazonaws.com/Production/store', {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({ name, msg, email })})
        }} />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
