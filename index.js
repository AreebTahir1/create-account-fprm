import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Demoform from './Demoform';
  
ReactDOM.render(
  <React.StrictMode>
    <div className="container">
       <Demoform />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
  
serviceWorker.unregister();