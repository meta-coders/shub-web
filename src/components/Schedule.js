import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import TimeTable from './TimeTable.js';
import CalendarComponent from './CalendarComponent.js';
import { connect } from 'react-redux';

class Schedule extends Component {

  render() {
    const styles = {
      backgroundColor: 'var(--bg-color)',
      height: '89vh',
      padding: '6vh 2vw 6vh 2vw',
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
    };

    return (
      <div style={styles}>
        {!this.props.sessionId ?
          <Redirect to={{ pathname: '/login' }} /> :
          <Fragment />
        }
        <TimeTable />
        <CalendarComponent />
      </div>
    );
  }

}

Schedule.propTypes = {
  sessionId: PropTypes.string,
};

export default connect(
  state => ({
    sessionId: state.sessionInfo.sessionId,
    data: state.schedule,
  })
)(Schedule);
