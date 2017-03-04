import React from "react"
import AppBar from 'material-ui/AppBar';

var styles = {
  appBar: {
    //backgroundColor: '#26A69A',
    backgroundColor: '#E53935',
     minHeight:50,
     color: "black"
  },
  tabs: {
    width: '100%',
  },
}

export default class HeaderOuter extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                style={styles.appBar}
                    title="Report Crimes App"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />

                {this.props.children}
            </div>
        )
    }
}

