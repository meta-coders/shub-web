import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

const styles = {
  sideBarButton: {
    width: '100%',
    height: '11vh',
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    justifyContent: 'center',
    '& img': {
      height: '50%',
    },
    '& span': {
      color: '#92a6c2',
      height: '37.5%',
      textAlign: 'center',
      display: 'flex',
      fontSize: '0.8vw',
      flexDirection: 'column',
      textDecoration: 'none',
      justifyContent: 'center',
    },
  },

};

class SideBarButton extends Component {
  render() {
    if (localStorage.getItem('sessionId')) {
      console.log('true');
    } else {
      console.log('false');
    }
    return (
      <Link
        className={this.props.classes.sideBarButton}
        to={{ pathname: this.props.pathname }}
      >
        <img src={this.props.src} />
        {this.props.name ? <span>{this.props.name}</span> : <Fragment />}
      </Link>
    );
  }

}

SideBarButton.propTypes = {
  classes: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default (injectSheet(styles)(SideBarButton));
