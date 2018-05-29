import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Test from './components/test'

ReactDOM.render((

  <Router>
    <div>
      <Route exact path="/" component={Test} />
      <Route exact path="/poems" component={App} />
    </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
