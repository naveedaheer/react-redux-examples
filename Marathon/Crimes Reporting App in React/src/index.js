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

injectTapEventPlugin();

import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render((
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory}>
                
                <Route path="/" component={HeaderOuter}>
                <Route path="/login" component={Login}></Route>
                    <Route path="/app" component={App} />
                    <Route path="/crimes" component={Crimes} />
                    <Route path="/missingpeople" component={App} />
                    <IndexRoute component={MissingPeople}> </IndexRoute>
                </Route>
                
                <Route path="/home" component={HeaderInner}>
                <IndexRoute component={Home}> </IndexRoute>
                <Route path="registerDonor" component={RegisterDonor}></Route>
                <Route path="donorList" component={DonorList}></Route>
                <Route path="logout" component={Login}></Route>
                <Route path="thankyou" component={Thankyou}></Route>
                
                </Route>

            </Router>
        </Provider>
    </MuiThemeProvider>
),
    document.getElementById('root')
);
