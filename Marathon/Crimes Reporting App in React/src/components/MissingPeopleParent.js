import React from "react"
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link, browserHistory} from "react-router"
import * as firebase from "firebase"
import MissingPeople from "./MissingPeople"

var styles = {
  appBar: {
    backgroundColor: '#424242',
   // backgroundColor: '#3F51B5',
     minHeight:50,
     //height:300
  },

  buttonInAppBar : {
  margin: 12,
  backgroundColor: "transparent"
},
}
const title = <span>Missing people</span>

export default class HeaderInner extends React.Component {


    render() {
        return (
            <div>
                <AppBar
                style={styles.appBar}
               
                    title={title}
                   // iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                 <Link to="/home/missingpeopleparent/registermissingpeople" >   <RaisedButton style={styles.buttonInAppBar} label="Register a Crime" primary={false} /></Link>
                  <Link to="/home/missingpeopleparent/missingpeople" >   <RaisedButton style={styles.buttonInAppBar} label="View Crimes" primary={false} /></Link>
                     
                </AppBar>
               
                {this.props.children}
            </div>
        )
    }
}

