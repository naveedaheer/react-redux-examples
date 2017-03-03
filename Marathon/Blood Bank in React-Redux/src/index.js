import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import RegisterDonor from './components/RegisterDonor';
import DonorList from './components/DonorList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Logout from "./components/logout"
import HeaderOuter from "./components/HeaderOuter"
import HeaderInner from "./components/HeaderInner"

injectTapEventPlugin();
// import Nav from './components/nav.js';

import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render((
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory}>
                
                <Route path="/" component={HeaderOuter}>
                <Route path="/login" component={Login}></Route>
                    <Route path="/app" component={App} />
                    <IndexRoute component={SignUp}> </IndexRoute>
                </Route>
                
                <Route path="/home" component={HeaderInner}>
                <IndexRoute component={Home}> </IndexRoute>
                <Route path="registerDonor" component={RegisterDonor}></Route>
                <Route path="donorList" component={DonorList}></Route>
                <Route path="logout" component={Login}></Route>
                
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
),
    document.getElementById('root')
);
