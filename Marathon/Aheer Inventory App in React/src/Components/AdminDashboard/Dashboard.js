import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MUI from 'material-ui'
import AppBar from 'material-ui/AppBar';


 const styles ={ 
 appBar : {
   // backgroundColor: '#009688',
    backgroundColor: '#3F51B5',
     minHeight:50,
     //height:300
  },

  drawer: {
    backgroundColor: '#3F51B5',
    color: "green",
    width: 200
  }
 }

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <AppBar title="Aheer Inventory" style={styles.appBar}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
         onTouchTap={this.handleToggle} >      </ AppBar>

        <Drawer 
        // width={200}
        backgroundColor={"#4A148C"}
         openSecondary={false} open={this.state.open} style={styles.drawer} >
              
              <AppBar title="Dashboard" style={styles.appBar}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
         onTouchTap={this.handleToggle} >   </ AppBar>

          <MenuItem>Add Product</MenuItem>
          <MenuItem>View Product</MenuItem>
          
        </Drawer>
   
      </div>
    );
  }
}