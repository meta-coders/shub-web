import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import user from '../icons/user.svg';
import warning from '../icons/warning.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actions from '../actions/index';
import { Carousel } from 'react-responsive-carousel';

const logOutAction = Actions.logOutAction;
const getPinnedAction = Actions.getPinnedAction;
const styles = {
  header: {
    background: 'var(--header-bg-color)',
    width: '100%',
    height: '11vh',
    color: 'var(--header-color)',
  },
  leftSide: {
    height: 'inherit',
    float: 'left',
    width: '40%',
    paddingLeft: '2vw',
    overflow: 'hidden',
    '& button': {
      display: 'none',
    },
    '& ul': {
      margin: '0',
    },
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 'inherit',
    float: 'right',
    width: '8%',
    paddingRight: '2vw',
  },
  warning: {
    height: '6vh',
    margin: 'auto 0',
  },
  singIn: {
    marginLeft: '1vw',
    height: '100%',
  },
  name: {
    fontSize: '1.2vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  message: {
    width: '100%',
    fontSize: '1.2vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '5%',
    '& span': {
      fontSize: '1.2vw',
    },
  },
  pinContainer: {
    height: '11vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    '& span': {
      textAlign: 'left',
      margin: 'auto 0 auto 1vw',
    },
  },
};

class Header extends Component {
  componentDidMount() {
    this.props.onHeaderDidMount(localStorage.getItem('sessionId'));
  }
  handleLogOut = () => {
    this.props.onLogOutClick(this.props.sessionInfo.sessionId);
  }

  render() {
    const { classes, pinned } = this.props;
    console.log(pinned);
    return (
      <div className={classes.header}>
        {localStorage.getItem('sessionId') !== 'false' ? (
          <Carousel
            className={classes.leftSide}
            autoPlay
            interval={3000}
            infiniteLoop axis="vertical"
            showStatus={false} showIndicators={false} showArrows={false}
            showThumbs={false}
          >
            {
              pinned.map(pin => (
                <div className={classes.pinContainer} key={pin.message}>
                  <img className={classes.warning} src={warning} />
                  <span >
                    {pin.message}
                  </span>
                </div>
              ))
            }

          </Carousel>
        ) :
          <Fragment />
        }
        <div className={classes.rightSide}>
          <span className={classes.name}>{this.props.name}</span>
          <Link
            to={{ pathname: '/login' }}
            className={classes.warning}
          >
            <img
              className={classes.singIn}
              src={user}
              onClick={this.handleLogOut}
            />
          </Link>
        </div>
      </div>
    );
  }

}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  onHeaderDidMount: PropTypes.func.isRequired,
  onLogOutClick: PropTypes.func.isRequired,
  sessionInfo:  PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  pinned: PropTypes.array,
};

export default connect(
  state => ({
    name: state.sessionInfo.name,
    sessionInfo: state.sessionInfo,
    pinned: state.pinned,
  }),
  dispatch => ({
    onHeaderDidMount: (sessionId) => {
      dispatch({ type: 'RENDER_PAGE' });
      if (sessionId !== 'false') {
        dispatch(getPinnedAction(sessionId));
      }
    },
    onLogOutClick: (sessionId) => {
      dispatch(logOutAction(sessionId));
    },
  })
)(injectSheet(styles)(Header));
