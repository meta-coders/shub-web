import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  header:{
    background:'#3d628f',
  }
}

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        Header
      </div>
    );
  }

}

export default injectSheet(styles)(Header);
