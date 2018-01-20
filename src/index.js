import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const MainApp = (props) => (
  <BrowserRouter>
    <App {...props} />
  </BrowserRouter>
)

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
