import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';

const styles = {
  column: {
    display: 'flex',
    flexDirection: 'column',
    '& > div:first-child': {
      position: 'relative',
      zIndex: '10',
      background: '#7F94B5',
      boxShadow: '0px 15px 10px -15px #777',
    },
  },
  cell1: {
    borderRight: '1px solid #93A1B6',
    background: '#93A1B6',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '7vh',
    textAlign: 'center',
    '& img': {
      height: '5vh',
    },
  },
  cell2: {
    borderRight: '1px solid #93A1B6',
    background: '#B1BBCC',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '7vh',
    textAlign: 'center',
  },
  time: {
    fontSize: '0.8vw',
  },
  id: {
    fontSize: '2vw',
  },
};

class Column extends Component {
  render() {
    const { classes, data, first } = this.props;
    const cells = data.map((item, i) => (
      <div className={item.id % 2 == 0 ? classes.cell1 : classes.cell2}>
        <div className={classes.id}>{i + 1}</div>
        <div className={classes.time}>{item.start + '-' + item.end}</div>
      </div>
    ));
    return (
      <div className={classes.column}>
        {first ? (
          <div className={classes.cell1}>
            <img src={first} />
          </div>
        ) : <Fragment />
        }
        {cells}
      </div>
    );
  }

}

export default injectSheet(styles)(Column);
