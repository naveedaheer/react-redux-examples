import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from "./components/Home"
import MainPage from "./components/MainPage"
import AllUsers from "./components/AllUsers"
import Login from "./components/Login"
import Signup from "./components/Signup"

import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  (
    <Router history={browserHistory}>

        <Route path="/home" component={Home}>
            <Route path="/mainpage" component={MainPage}></Route>
            <Route path="/allusers" component={AllUsers}></Route>
        </Route>

        <Route path="/login" component={Login}></Route>
        <Route path="/" component={App}>
            <IndexRoute component={Signup} />
        </Route>


    </Router>
),
  document.getElementById('root')
);
