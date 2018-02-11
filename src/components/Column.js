import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  column: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: '10',
    boxShadow: '3px 0px 2px #888',
    '& > div:first-child': {
      position: 'relative',
      zIndex: '10',
      background: 'var(--table-header-bg-color)',
      borderRadius: '0',
    },
  },
  cell1: {
    background: 'var(--table-cell1-bg-color)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    height: 'fill-available',
    '& img': {
      height: '4vh',
    },
  },
  cell2: {
    background: 'var(--table-cell2-bg-color)',
    composes: '$cell1',
  },
  time: {
    fontSize: '0.8vw',
  },
  id: {
    fontSize: '1vw',
    marginBottom: '0.5vh',
  },
};

class Column extends Component {
  render() {
    const { classes, data, first } = this.props;
    const cells = data.map((item, i) => (
      <div
        key={item.id}
        className={item.id % 2 === 0 ? classes.cell1 : classes.cell2}
      >
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

Column.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  first: PropTypes.string,
};

export default injectSheet(styles)(Column);
