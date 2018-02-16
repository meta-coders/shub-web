import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

// function arrItmesToObjKeys(arr) {
//
//   const objArr = {};
//   arr.forEach(
//     (item) => {
//       objArr[item] = true;
//     });
//   return objArr;
// }

const styles = {
  filtersContainer: {
    height: '24vh',
    overflow: 'scroll',
  },
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
  pdfContainer: {
    height: '60vh',
    overflow: 'scroll',
  },
};

class CheckBoxHomeWork extends Component {


  handleCheckBoxClick = (subject, value) => {
    this.props.onCheckBoxClick(subject, value);
  };

  render() {
    const { classes, subjects } = this.props;
    return (
      <div className={classes.checkBoxHomeWork}>
        <div className={classes.filtersContainer}>
          {
            subjects.map(subject => (
              <div key={subject} className={classes.select}>
                <Checkbox
                  checked={this.props.lessons.includes(subject)}
                  onChange={(e) => {
                    this.handleCheckBoxClick(subject, e.target.checked);
                  }}
                />
                <span>
                  {subject}
                </span>
              </div>
            ))
          }
        </div>
        <div className={classes.pdfContainer} />
      </div>
    );
  }
}

CheckBoxHomeWork.propTypes = {
  classes: PropTypes.object,
  lessons: PropTypes.array,
  subjects: PropTypes.array,
  onCheckBoxClick: PropTypes.func,
};


export default injectSheet(styles)(CheckBoxHomeWork);
