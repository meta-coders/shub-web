import React, { Component } from 'react';
import HomeworkTodo from './HomeworkTodo.js';
import CheckBoxHomeWork from './CheckBoxHomeWork.js';
import { connect } from 'react-redux';
import Actions from '../actions/index';
import PropTypes from 'prop-types';

const homeworkAction = Actions.homeworkAction;

const arrOfHomeWorksToUniqSubjArr = (homework) => {
  const subjectsSet = new Set(homework.map(item => item.subject));
  const subjects = [...subjectsSet];
  return subjects;
};

class Homework extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: arrOfHomeWorksToUniqSubjArr(this.props.homework),
    };
  }



  // componentWillUpdate() {
  //   const arrSubj = arrOfHomeWorksToUniqSubjArr(this.props.homework)
  //   this.setState({lessons: arrSubj});
  // }

  componentDidUpdate = () => {
    console.log(this.state.lessons);
  }

  handleCheckBoxClick = (subject, value) => {
    const arr = [];
    arr.push(subject);
    this.setState((prevState) => {
      let newState = [];
      if (value) {
        newState = prevState.lessons.push(subject);
      } else {
        const index = this.state.lessons.indexOf(subject);
        newState = prevState.lessons.splice(index, 1);
      }
      return newState;
    });
  }


  render() {
    const styles = {
      backgroundColor: 'var(--bg-color)',
      height: '89vh',
      padding: '6vh 2vw 6vh 2vw',
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
    };
    const { homework, sessionId, onHomeworkClick } = this.props;
    const subjects = arrOfHomeWorksToUniqSubjArr(homework);
    const filteredHomework = homework.filter(
      task => this.state.lessons.includes(task.subject)
    );
    return (
      <div style={styles}>
        <HomeworkTodo
          homework={filteredHomework}
          sessionId={sessionId}
          onHomeworkClick={onHomeworkClick}
        />
        <CheckBoxHomeWork
          subjects={subjects}
          onCheckBoxClick={this.handleCheckBoxClick}
          lessons={this.state.lessons}
        />
      </div>
    );
  }
}

Homework.propTypes = {
  onHomeworkClick: PropTypes.func.isRequired,
  homework: PropTypes.array,
  sessionId: PropTypes.string,
};


export default connect(
  state => ({
    homework: state.homeWork,
    sessionId: state.sessionInfo.sessionId,
  }),
  dispatch => ({
    onHomeworkClick: (homeworkId, sessionId, done) => {
      dispatch(homeworkAction(homeworkId, sessionId, done));
    },
  })
)(Homework);
