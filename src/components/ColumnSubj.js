import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  column: {
    display: 'flex',
    flexDirection: 'column',
    '& > div:first-child': {
      background: 'var(--table-header-bg-color)',
      boxShadow: '0 1px 1px #888',
      fontSize: '1.1vw',
    },
  },
  cell1: {
    background: 'var(--table-cell1-bg-color)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'fill-available',
    textAlign: 'center',
    fontSize: '1.5vw',
  },
  cell2: {
    composes: '$cell1',
    background: 'var(--table-cell2-bg-color)',
    display: 'flex',
  },
  time: {
    fontSize: '0.6vw',
  },
  id: {
    fontSize: '0.9vw',
  },
};

const structCells = (data = [], max) => {
  const res = [];
  let j = 0;
  for (let i = 0; i < max; i++) {
    if (data[j]) {
      if (i === (parseInt(data[j].lesson) - 1)) {
        res.push(data[j]);
        j++;
      } else {
        res.push({});
      }
    } else {
      res.push({});
    }
  }
  return res;
};

const numbToWeekday = (numb) => {
  if (numb === 1) return 'Понеділок';
  if (numb === 2) return 'Вівторок';
  if (numb === 3) return 'Середа';
  if (numb === 4) return 'Четверг';
  if (numb === 5) return 'П`ятниця';
  if (numb === 6) return 'Субота';
};

class ColumnSubj extends Component {
  render() {
    const { classes, data, max, weekday } = this.props;
    const cells = structCells(data, max).map((item, index) => (
      <div
        key={item.subject}
        className={index % 2 !== 0 ? classes.cell1 : classes.cell2}
      >
        <div className={classes.id}>{item.subject}</div>
        <div className={classes.time}>{item.teacher_name}</div>
        <div className={classes.time}>{item.cabinet}</div>
      </div>
    ));
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
ColumnSubj.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  max: PropTypes.number.isRequired,
  weekday: PropTypes.number.isRequired,
};

export default injectSheet(styles)(ColumnSubj);
