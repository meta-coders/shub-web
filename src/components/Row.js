import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styleRow = {
  row1: {
    height: '20vh',
    display: 'flex',
    flexDirection: 'row',
    '& > div': {
      width: '23.5vw',
      fontSize: '3vh',
      textAlign: 'center',
      backgroundColor: '#93A1B6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  row2: {
    height: '20vh',
    display: 'flex',
    flexDirection: 'row',
    '& > div': {
      width: '23.5vw',
      fontSize: '3vh',
      textAlign: 'center',
      backgroundColor: '#B1BBCC',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  faces: {
    height: '18vh',
  },
  fullName: {
    width: '23.5vw',
  },
  lesson: {
    width: '23.5vw',
  },
  image: {
    padding: '1vh 0',
    display: 'flex',
    justifyContent: 'center',
  },
};

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    let row = {};
    if (this.props.index % 2 === 0) {
      row = classes.row1;
    } else { row = classes.row2; }
    return (
      <div className={row}>
        <div className={classes.fullName}><span>{this.props.name}</span></div>
        <div className={classes.image}>
          <img className={classes.faces} src={this.props.photo} />
        </div>
        <div className={classes.lesson}><span>{this.props.subject}</span></div>
        <div><span>{this.props.contacts}</span></div>
      </div>
    );
  }
}

Row.propTypes = {
  classes: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  contacts: PropTypes.string.isRequired,
};

export default injectSheet(styleRow)(Row);
