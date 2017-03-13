import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Store/Store/Store';
import Login from './Components/Login/Login';
import Dashboard from "./Components/AdminDashboard/Dashboard"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';


injectTapEventPlugin();

ReactDOM.render(
(
<MuiThemeProvider>
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/home" component={Dashboard} > </Route>
       <Route path="/" component={Login} > </Route>
    </Router>
  </ Provider>
</ MuiThemeProvider>
),
  document.getElementById('root')
);
