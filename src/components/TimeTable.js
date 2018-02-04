import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import Column from './Column';
import ColumnSubj from './ColumnSubj';
import clock from '../icons/clock.svg';

import Actions from '../actions/index';

const timetableAction = Actions.timetableAction;

const Lesson = (arr) => {
  const newArr = [];
  for (let i=1; i<7; i++) {
    newArr.push(arr.filter(item => item.weekday===i))
  }
  return newArr;
}

const getMaxLenth = (arr) => {
  let max = 0;
  for ( var day of arr) {
    for ( var lessonNumb in day) {
      if (lessonNumb>max) (max = lessonNumb);
    }
  }
  return (parseInt(max)+1)
}


const styles = {
  timetable:{
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 2fr 2fr 2fr 2fr 2fr',
    '& *':{
      color:'#3d628f'
    }
  }
}

class TimeTable extends Component {
  componentDidMount() {
    console.log('DidMount');
    this.props.onTimeTableDidMount('699b8469cf9c96b10f54068a827e9c0d')
  }
  render() {
    const { classes, data } = this.props;
    const structSchedule = Lesson(data.schedule)
    const maxLessons = getMaxLenth(structSchedule)
    const structTimetable = data.timetable.filter((item,i) => (parseInt(i+1)<=maxLessons))
    console.log(structTimetable);
    return (
      <div className={classes.timetable}>
        <Column data={structTimetable} first={clock} />
        {
          [0,1,2,3,4,5].map(i => <ColumnSubj data={structSchedule[i]} weekday={i+1} max={maxLessons}/>)
        }
      </div>
    );
  }

}

export default connect(
  state => ({
    data: state.schedule,
  }),
  dispatch => ({
    onTimeTableDidMount: (sessionId) => {
      dispatch(timetableAction(sessionId));
    },
  })
)(injectSheet(styles)(TimeTable));
