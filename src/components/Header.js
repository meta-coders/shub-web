import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';
import user from '../icons/user.svg';
import warning from '../icons/warning.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actions from '../actions/index';

const logOutAction = Actions.logOutAction;

const styles = {
  header: {
    background: '#7F94B5',
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
    justifyContent: 'space-between',
    paddingRight: '0vw',
  },
  warning: {
    height: '60%',
    margin: 'auto',
  },
  singIn: {
    height: '100%',
  },
  name: {
    fontSize: '1.5vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: '5%',
  },
  message: {
    fontSize: '1.5vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '5%',
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      message: this.props.message,
    };
  }
  componentDidMount() {
    this.props.onHeaderDidMount();
  }
  handleLogOut = () => {
    this.props.onLogOutClick(this.props.sessionInfo.sessionId);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <div className={classes.leftSide}>
          {localStorage.getItem('sessionId') !== 'false' ? <img className={classes.warning} src={warning} /> : <Fragment />}
          <span className={classes.message}>{localStorage.getItem('sessionId') !== 'false' ? this.state.message : ''}</span>
        </div>
        <div className={classes.rightSide}>
          <span className={classes.name}>{this.props.name}</span>
          <Link
            to={{ pathname: '/login' }}
            className={classes.warning}
          >
            <img className={classes.singIn} src={user} onClick={this.handleLogOut} />
          </Link>
        </div>
      </div>
    );
  }

}

export default connect(
  state => ({
    name: state.sessionInfo.name,
    sessionInfo: state.sessionInfo,
  }),
  dispatch => ({
    onHeaderDidMount: () => dispatch({ type: 'RENDER_PAGE' }),
    onLogOutClick: (sessionId) => {
      dispatch(logOutAction(sessionId));
    },
  })
)(injectSheet(styles)(Header));
