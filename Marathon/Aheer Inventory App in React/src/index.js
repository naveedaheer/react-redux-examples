import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Store/Store/Store';
import Login from './Components/Login/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';


injectTapEventPlugin();

ReactDOM.render(
(
<MuiThemeProvider>
  <Router>
    <Route path="/" component={Login} > </Route>
  </Router>
</MuiThemeProvider>
),
  document.getElementById('root')
);
