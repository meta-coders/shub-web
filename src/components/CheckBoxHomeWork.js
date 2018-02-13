import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

function arrItmesToObjKeys(arr) {

  const objArr = {};
  arr.forEach(
    (item) => {
      objArr[item] = true;
    });
  return objArr;
}

const styles = {
  checkBoxHomeWork: {
    padding: '2.5vh 0',
    marginLeft: '2vw',
    height: 'fill-available',
    boxShadow: '2px 2px 4px #888',
    background: 'var(--table-bg-color)',
    display: 'flex',
    flexDirection: 'column',
    '& span': {
      fontSize: '1vw',
      padding: '0',
      margin: '0 5%',
    },
  },
  select: {
    width: '80%',
    margin: '2vh auto',
    '& input': {
      borderRadius: '50% !important',
      outline: 'none',
      background: 'none',
    },
  },
};

class CheckBoxHomeWork extends Component {
  render() {
    const { classes, subjects } = this.props;
    return (
      <div className={classes.checkBoxHomeWork}>
        {
          subjects.map(subject => (
            <div key={subject} className={classes.select}>
              <input
                type="checkbox"
                onChange={(e) => {
                  console.log(e.target.checked);
                }}
              />
              <span>
                {subject}
              </span>
            </div>
          ))
        }
      </div>
    );
  }
}

CheckBoxHomeWork.propTypes = {
  classes: PropTypes.object,
  subjects: PropTypes.array,
};


export default injectSheet(styles)(CheckBoxHomeWork);
