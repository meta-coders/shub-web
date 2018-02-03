import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Column from './Column';
import ColumnSubj from './ColumnSubj';
import clock from '../icons/clock.svg';
const data = {
  "schedule":[
    {"weekday":1,"lesson":1,"subject":"Математика","cabinet":100,"teacher_name":"Петровіч О.В."},
    {"weekday":1,"lesson":2,"subject":"Англ. Мова","cabinet":101,"teacher_name":"Генадівнічівна І.І."},
    {"weekday":1,"lesson":3,"subject":"Укр. Мова","cabinet":102,"teacher_name":"Довгополючка Р.Р."},
    {"weekday":1,"lesson":4,"subject":"Інформатика","cabinet":103,"teacher_name":"Кувічка М.Е."},
    {"weekday":1,"lesson":5,"subject":"Економіка","cabinet":104,"teacher_name":"Мачехін М.М."},
    {"weekday":1,"lesson":6,"subject":"Фізра","cabinet":105,"teacher_name":"Фізрук Е.Ю."},
    {"weekday":1,"lesson":7,"subject":"Історія","cabinet":106,"teacher_name":"Шевчук Х.Т."},
    {"weekday":2,"lesson":1,"subject":"Математика","cabinet":200,"teacher_name":"Петровіч О.В."},
    {"weekday":2,"lesson":2,"subject":"Англ. Мова","cabinet":201,"teacher_name":"Генадівнічівна І.І."},
    {"weekday":2,"lesson":3,"subject":"Укр. Мова","cabinet":202,"teacher_name":"Довгополючка Р.Р."},
    {"weekday":2,"lesson":4,"subject":"Інформатика","cabinet":203,"teacher_name":"Кувічка М.Е."},
    {"weekday":2,"lesson":5,"subject":"Економіка","cabinet":204,"teacher_name":"Мачехін М.М."},
    {"weekday":2,"lesson":7,"subject":"Історія","cabinet":206,"teacher_name":"Шевчук Х.Т."},
    {"weekday":3,"lesson":1,"subject":"Математика","cabinet":300,"teacher_name":"Петровіч О.В."},
    {"weekday":3,"lesson":2,"subject":"Англ. Мова","cabinet":301,"teacher_name":"Генадівнічівна І.І."},
    {"weekday":3,"lesson":3,"subject":"Укр. Мова","cabinet":302,"teacher_name":"Довгополючка Р.Р."},
    {"weekday":3,"lesson":4,"subject":"Інформатика","cabinet":303,"teacher_name":"Кувічка М.Е."},
    {"weekday":3,"lesson":5,"subject":"Економіка","cabinet":304,"teacher_name":"Мачехін М.М."},
    {"weekday":3,"lesson":6,"subject":"Фізра","cabinet":305,"teacher_name":"Фізрук Е.Ю."},
    {"weekday":3,"lesson":7,"subject":"Історія","cabinet":306,"teacher_name":"Шевчук Х.Т."},
    {"weekday":5,"lesson":1,"subject":"Математика","cabinet":500,"teacher_name":"Петровіч О.В."},
    {"weekday":5,"lesson":2,"subject":"Англ. Мова","cabinet":501,"teacher_name":"Генадівнічівна І.І."},
    {"weekday":5,"lesson":3,"subject":"Укр. Мова","cabinet":502,"teacher_name":"Довгополючка Р.Р."},
    {"weekday":5,"lesson":5,"subject":"Економіка","cabinet":504,"teacher_name":"Мачехін М.М."},
    {"weekday":5,"lesson":6,"subject":"Фізра","cabinet":505,"teacher_name":"Фізрук Е.Ю."},
    {"weekday":5,"lesson":7,"subject":"Історія","cabinet":506,"teacher_name":"Шевчук Х.Т."},
    {"weekday":6,"lesson":1,"subject":"Математика","cabinet":600,"teacher_name":"Петровіч О.В."},
    {"weekday":6,"lesson":2,"subject":"Англ. Мова","cabinet":601,"teacher_name":"Генадівнічівна І.І."},
    {"weekday":6,"lesson":3,"subject":"Укр. Мова","cabinet":602,"teacher_name":"Довгополючка Р.Р."},
    {"weekday":6,"lesson":4,"subject":"Інформатика","cabinet":603,"teacher_name":"Кувічка М.Е."},
    {"weekday":6,"lesson":5,"subject":"Економіка","cabinet":604,"teacher_name":"Мачехін М.М."},
    {"weekday":6,"lesson":6,"subject":"Фізра","cabinet":605,"teacher_name":"Фізрук Е.Ю."},
    {"weekday":6,"lesson":7,"subject":"Історія","cabinet":606,"teacher_name":"Шевчук Х.Т."}
  ],
  "timetable":[
    {"id":1,"start":"08:00","end":"08:45"},
    {"id":2,"start":"08:55","end":"09:40"},
    {"id":3,"start":"09:50","end":"10:35"},
    {"id":4,"start":"10:55","end":"11:40"},
    {"id":5,"start":"11:50","end":"12:35"},
    {"id":6,"start":"12:45","end":"13:30"},
    {"id":7,"start":"13:50","end":"14:35"},
    {"id":8,"start":"14:45","end":"15:30"},
    {"id":9,"start":"15:40","end":"16:25"},
    {"id":10,"start":"16:45","end":"17:30"},
  ],
  }

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
  console.log(parseInt(max)+1);
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

  render() {
    const { classes } = this.props;
    const structSchedule = Lesson(data.schedule)
    const maxLessons = getMaxLenth(structSchedule)
    const structTimetable = data.timetable.filter(item => (parseInt(item.id)<=maxLessons))
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

export default injectSheet(styles)(TimeTable);
