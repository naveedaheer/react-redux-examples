import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App';
import Login from './components/login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render((
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory}>
 
           <Route path="/" component={Login}>
                    <IndexRoute component={Login}> </IndexRoute>
                </Route>
      
            </Router>
        </Provider>
    </MuiThemeProvider>
),
    document.getElementById('root')
);
