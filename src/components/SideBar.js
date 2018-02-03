import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  sideBar:{
    background:'#3d628f',
  }
}

class SideBar extends Component {

  render() {
    return (
      <div>
        SideBar
      </div>
    );
  }

}

export default injectSheet(styles)(SideBar);
