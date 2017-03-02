import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import Donors from './components/donors';
import NestedAbout from './components/aboutnestedroute';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Logout from "./components/logout"

injectTapEventPlugin();
// import Nav from './components/nav.js';

import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render((
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/login" component={Login}></Route>
                <Route path="/donorList" component={Donors}></Route>
                <Route path="/aboutnested" component={NestedAbout}></Route>
                <Route path="/logout" component={Login}></Route>
                <Route path="/home" component={Home}> </Route>
                <Route path="/" component={App}>
                    <IndexRoute component={SignUp} />
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
),
    document.getElementById('root')
);
