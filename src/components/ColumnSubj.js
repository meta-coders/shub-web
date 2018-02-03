import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';

const styles = {
  column:{
    display:'flex',
    flexDirection:'column',
    '& > div:first-child':{
      position:'relative',
      zIndex:'10',
      background:'#7F94B5',
      boxShadow:'0px 3px 5px -3px #777'
    },
  },
  cell1:{
    background:'#93A1B6',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    height:'7vh',
    textAlign:'center',
  },
  cell2:{
    background:'#B1BBCC',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    height:'7vh',
    textAlign:'center',
  },
  time:{
    fontSize:'0.8vw',
  },
  id:{
    fontSize:'1vw',
  }
}

const structCells = (data=[], max) => {
  const res = [];
  let j = 0;
  for(let i=0; i<max; i++) {
    if(data[j]){
      if(i===(parseInt(data[j].lesson)-1)){
        console.log('Norm: '+data[j].lesson);
        res.push(data[j]);
        j++;
      } else {
        console.log('Ne Norm: '+data[j].lesson);
        res.push({});
      }
    } else {
      res.push({})
    }
  }
  console.log(res);
  return res
}

const numbToWeekday = (numb) => {
  if (numb===1) return 'Понеділок';
  if (numb===2) return 'Вівторок';
  if (numb===3) return 'Середа';
  if (numb===4) return 'Четверг';
  if (numb===5) return 'П`ятниця';
  if (numb===6) return 'Суббота';
}

class ColumnSubj extends Component {
  render() {
    const { classes, data, max, weekday } = this.props;
    const cells = structCells(data, max).map((item, index) =>
      <div className={index%2!==0?classes.cell1:classes.cell2}>
        <div className={classes.id}>{item.subject}</div>
        <div className={classes.time}>{item.teacher_name}</div>
        <div className={classes.time}>{item.cabinet}</div>
      </div>)
    return (
      <div className={classes.column}>
        {
          <div className={classes.cell1}>
            {numbToWeekday(weekday)}
          </div>
        }
        {cells}
      </div>
    );
  }

}

export default injectSheet(styles)(ColumnSubj);