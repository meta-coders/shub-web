import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Calendar from 'react-calendar/dist/entry.nostyle';
import calendarStyle from './CalendarStyle.css';

const events = {
  id: [],
  date: '',
  description: '',
  class_id: 0,
};

const styles = {
  calendarContainer: {
    boxShadow: '0 0 50px grey',
    background: '#B1BBCC',
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    listStyle: 'none',
    marginTop: '20px',
    fontSize: '30px'
  },
};

class CalendarComponent extends Component {
  state = {
    date: new Date(),
    events: [
      {
        id: 0,
        date: '2018-02-01',
        description: '1 event',
        class_id: 0,
      },
      {
        id: 1,
        date: '2018-01-05',
        description: '2 event',
        class_id: 0,
      },
      {
        id: 2,
        date: '2018-01-23',
        description: '3 event',
        class_id: 0,
      },
    ],
    month: '',
  }

  onChange = date => {
    this.setState({ date })
    console.log('state was changed ' + this.state.date)
  }

  onMonthChange = month => {
    this.setState({ date: month.activeStartDate, month: month.activeStartDate.toString().split(' ')[1] })
  }

  renderEvents = obj => {
    if(new Date(obj.date).toString().split(' ')[1] === this.state.month) {
      return <li className={this.props.classes.list}>{obj.description}</li>
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.calendarContainer}>
        <Calendar
          style={calendarStyle}
          onChange={this.onChange}
          onMonthClick={this.onMonthChange}
          onActiveDateChange={this.onMonthChange}
          onClickDay={(value) => this.setState({date: value})}
          value={this.state.date}
        />
        <div>
          <ul>
            {this.state.events.map(this.renderEvents)}
          </ul>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(CalendarComponent);
