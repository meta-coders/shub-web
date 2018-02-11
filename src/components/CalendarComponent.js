import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import Calendar from 'react-calendar/dist/entry.nostyle';
import calendarStyle from './CalendarStyle.css';
import Actions from '../actions/index';

const eventsAction = Actions.eventsAction;


const styles = {
  calendarContainer: {
    marginLeft: '2vw',
    height: 'fill-available',
    boxShadow: '2px 2px 4px #888',
    background: 'var(--table-bg-color)',
    display: 'flex',
    flexDirection: 'column',
    '& ul': {
      padding: '0',
      margin: '0 5%',
    },
  },
  list: {
    display: 'grid',
    gridTemplateColumns: '2fr 5fr',
    borderRadius: '0.5vw',
    padding: '5%',
    listStyle: 'none',
    fontSize: '2vh',
    color: 'var(--calendar-list-color)',
  },
  events: {
    overflow: 'scroll',
  },
  date: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& div': {
      margin: 'auto',
    },
  },
  description: {
    margin: 'auto auto auto 0',
    fontSize: '1.5vh',
  },
};

const numbToMonth = (numb) => {
  const month = new Array();
  month[0] = 'Jan';
  month[1] = 'Feb';
  month[2] = 'Mar';
  month[3] = 'Apr';
  month[4] = 'May';
  month[5] = 'Jun';
  month[6] = 'Jul';
  month[7] = 'Aug';
  month[8] = 'Sepr';
  month[9] = 'Oct';
  month[10] = 'Nov';
  month[11] = 'Dec';
  const n = month[numb];
  return n;
};

class CalendarComponent extends Component {
  state = {
    date: new Date(),
    month: numbToMonth((new Date().getMonth())),
  }

  componentDidMount() {
    this.props.onCalendarComponentDidMount(localStorage.getItem('sessionId'));
  }

  onChange = (date) => {
    this.setState({ date });
    console.log('state was changed ' + this.state.date);
  }

  onMonthChange = (month) => {
    this.setState({
      date: month.activeStartDate,
      month: month.activeStartDate.toString().split(' ')[1],
    });
  }

  renderEvents = (obj) => {
    const eventDay = new Date(obj.date);
    if (
      eventDay.toLocaleString('en-us', { month: 'short' }) === this.state.month
    ) {
      return (
        <li className={this.props.classes.list}>
          <div className={this.props.classes.date}>
            <div>{eventDay.getDate()}</div>
            <div>{eventDay.toLocaleString('uk-ua', { month: 'short' })}</div>
          </div>
          <div className={this.props.classes.description}>
            {obj.description}
          </div>
        </li>
      );
    }
  }

  render() {
    const { classes, events } = this.props;
    return (
      <div className={classes.calendarContainer}>
        <Calendar
          style={calendarStyle}
          onChange={this.onChange}
          onActiveDateChange={this.onMonthChange}
          onClickDay={value => this.setState({ date: value })}
          value={this.state.date}
        />
        <div className={classes.events}>
          <ul>
            {events.sort((a, b) => a.date > b.date).map(this.renderEvents)}
          </ul>
        </div>
      </div>
    );
  }
}

CalendarComponent.propTypes = {
  onCalendarComponentDidMount: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
};

export default connect(
  state => ({
    sessionId: state.sessionInfo.sessionId,
    events: state.events,
  }),
  dispatch => ({
    onCalendarComponentDidMount: (sessionId) => {
      dispatch(eventsAction(sessionId));
    },
  })
)(injectSheet(styles)(CalendarComponent));
