import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';


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
  sideBarButtonActive: {
    boxShadow: '0.2vw 0.2vh 1vw #888 inset',
    composes: '$sideBarButton',
    background: '#50AF80',
    '& span': {
      color: 'white',
    },
  },

};

class SideBarButton extends Component {
  render() {
    const { classes, pathname, onLinkClick, pathnameStore } = this.props;
    console.log(pathnameStore + ':' + pathname);
    return (
      <Link
        className={
          pathnameStore !== pathname ?
            classes.sideBarButton :
            classes.sideBarButtonActive
        }
        to={{ pathname: this.props.pathname }}
        onClick={onLinkClick(pathname)}
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
  onLinkClick: PropTypes.func,
  pathnameStore: PropTypes.string,
};

export default connect(
  state => ({
    pathnameStore: state.pathname,
  }),
  dispatch => ({
    onLinkClick: pathname => () => {
      console.log(pathname);
      dispatch({
        type: 'CHANGE_PATH',
        pathname,
      });
    },
  })
)(injectSheet(styles)(SideBarButton));
