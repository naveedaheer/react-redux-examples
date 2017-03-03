import React from "react"
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router"

var styles = {
  appBar: {
   // backgroundColor: '#009688',
    backgroundColor: '#E53935',
     minHeight:50,
     //height:300
  },
  
  buttonInAppBar : {
  margin: 12,
  backgroundColor: "transparent"
},

  tabs: {
    width: '100%',
  },
}

export default class HeaderInner extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                style={styles.appBar}
               
                    title="Aheer Blood Bank"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                      <Link to="/home/registerDonor" >   <RaisedButton style={styles.buttonInAppBar} label="Register For Donate Blood" primary={false} /></Link>
                       <Link to="/home/donorList" >  <RaisedButton style={styles.buttonInAppBar} label="Need Blood" primary={false} /></Link>

                </AppBar>

                {/*<AppBar
                style={styles.appBar}
                style={{backgroundColor:"#26A69A" , minHeight:50}} titleStyle={{lineHeight:50}}
                    title="Aheer Blood Bank"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"

                >
                                   
                </AppBar>*/}

                {this.props.children}
            </div>
        )
    }
}

