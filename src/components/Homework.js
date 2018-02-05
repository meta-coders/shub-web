import React, { Component } from 'react';
import HomeworkTodo from './HomeworkTodo.js';
import Calendar from './CalendarComponent.js';

class Homework extends Component {

  render() {
    const styles = {
      backgroundColor: '#C5D0D9',
      height: '89vh',
      padding: '6vh 2vw 6vh 2vw',
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
    };

    return (
      <div style={styles}>
        <HomeworkTodo />
        <Calendar />
      </div>
    );
  }

}

export default Homework;
