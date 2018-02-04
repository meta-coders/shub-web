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
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '4vw',
  },
  rightSide: {
    height: 'inherit',
    float: 'right',
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    paddingRight: '4vw'
  },
  warning: {
    height: '75%',
    margin: 'auto'
  },
  name: {
    fontSize: '2vw',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    paddingRight: '5%',
  },
  message: {
    fontSize: '2vw',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    paddingLeft: '5%',
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
