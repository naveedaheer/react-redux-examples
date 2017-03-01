import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <h1>Welcome to Aheer Blood Bank</h1>
                <Link to="/AllUsers">All Users</Link>
                <Link to="/MainPage">Main Page</Link>
                {this.props.children}
            </div>
        );
    }
}

export default Home;
