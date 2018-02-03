import React, { Component } from 'react';
import TimeTable from './TimeTable.js';
import Calendar from './Calendar.js';

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
        <Calendar />
      </div>
    );
  }

}

export default Schedule;
