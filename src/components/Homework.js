import React, { Component } from 'react';
import HomeworkTodo from './HomeworkTodo.js';
import CheckBoxHomeWork from './CheckBoxHomeWork.js';
import { connect } from 'react-redux';
import Actions from '../actions/index';
import PropTypes from 'prop-types';

const homeworkAction = Actions.homeworkAction;


class Homework extends Component {

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
    const subjectsSet = new Set(homework.map(item => item.subject));
    const subjects = [...subjectsSet];
    return (
      <div style={styles}>
        <HomeworkTodo
          homework={homework}
          sessionId={sessionId}
          onHomeworkClick={onHomeworkClick}
        />
        <CheckBoxHomeWork subjects={subjects} />
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
