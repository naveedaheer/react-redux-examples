import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from "./components/Layout"
// import {aa00ff} from 'material-ui/styles/colors';
// import getMuiTheme from 'material-ui/styles/getMuiTheme'

// const muiTheme = getMuiTheme({
//   palette: {
//     textColor: aa00ff,
//   },
//   appBar: {
//     height: 50,
//     backgroundColor: aa00ff
//   },
// });

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider
         //muiTheme={muiTheme} 
         > 
              <Layout />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
