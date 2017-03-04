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
import Thankyou from "./components/Thankyou"
import Crimes from "./components/Crimes"
import MissingPeople from "./components/MissingPeople"
import Complaints from "./components/complaints"

injectTapEventPlugin();

import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render((
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory}>
                
                <Route path="/" component={HeaderOuter}>
                <Route path="login" component={Login}></Route>
                <Route path="signup" component={SignUp}></Route>
                    <Route path="crimes" component={Crimes} />
                    <Route path="missingpeople" component={MissingPeople} />
                    <IndexRoute component={MissingPeople}> </IndexRoute>
                </Route>
                
                <Route path="/home" component={HeaderInner}>
                <IndexRoute component={Home}> </IndexRoute>
                <Route path="crimes" component={Crimes} />
                    <Route path="missingpeople" component={MissingPeople} />
                <Route path="logout" component={Login}></Route>
                <Route path="complaints" component={Complaints}></Route>
                
                </Route>

            </Router>
        </Provider>
    </MuiThemeProvider>
),
    document.getElementById('root')
);
