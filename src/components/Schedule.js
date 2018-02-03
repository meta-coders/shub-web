import React, { Component } from 'react';
import TimeTable from './TimeTable.js';
import CalendarComponent from './CalendarComponent.js';

class Schedule extends Component {

  render() {
    const styles= {
      backgroundColor: '#C5D0D9',
      height: '89vh',
      padding: '6vh 2vw 6vh 2vw',
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
    }

    return (
      <div style={styles}>
        <TimeTable />
        <CalendarComponent />
      </div>
    );
  }

}

export default Schedule;
