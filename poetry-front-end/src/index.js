import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'
import PoemContainer from './components/PoemContainer'
ReactDOM.render((

  <Router>
    <div>
      <Route exact path="/" component={PoemContainer} />
      <Route exact path="/poems" component={App} />
    </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
