import React, { Component } from 'react';
import injectSheet from 'react-jss';
import user from '../icons/user.svg';
import warning from '../icons/warning.svg';

const styles = {
  header: {
    background:'#7F94B5',
    width: '100%',
    height: '11vh',
    color: '#607896',
  },
  leftSide: {
    height: 'inherit',
    float: 'left',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '50px',
  },
  rightSide: {
    height: 'inherit',
    float: 'right',
    display: 'flex',
    flexDirection: 'row',
    paddingRight: '50px'
  },
  warning: {
    height: '50px',
    paddingTop: '25px'
  },
  name: {
    fontSize: '20px',
    paddingTop: '40px',
    paddingRight: '15px',
  },
  message: {
    fontSize: '20px',
    paddingTop: '40px',
    paddingLeft: '15px',
  },
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: this.props.name,
      message: this.props.message,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <div className={classes.leftSide}>
          <img className={classes.warning} src={warning} />
          <span className={classes.message}>{this.state.message}</span>
        </div>
        <div className={classes.rightSide}>
          <span className={classes.name}>{this.state.name}</span>
          <img className={classes.warning} src={user} />
        </div>
      </div>
    );
  }

}

export default injectSheet(styles)(Header);
