import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Checkbox from 'rc-checkbox';

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
  constructor(props) {
    super(props);
    this.state = {
      lessons: {},
    };
  }

  func = (subject, value) => {
    const objArr = {};
    this.props.subjects.forEach(
      (item) => {
        if (item === subject) {
          objArr[item] = value;
        } else {
          objArr[item] = false;
        }
      });
    this.setState({ lessons: objArr });
    // this.setState({ lessons.subject: value});
  }

  render() {
    const { classes, subjects } = this.props;
    return (
      <div className={classes.checkBoxHomeWork}>
        {
          subjects.map(subject => (
            <div key={subject} className={classes.select}>
              <Checkbox
                checked={this.state.lessons[subject]}
                onChange={(e) => {
                  this.func(subject, e.target.checked);
                  console.log(e.target.checked);
                  console.log(this.state.lessons);
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
