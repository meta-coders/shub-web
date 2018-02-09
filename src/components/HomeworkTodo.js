import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import done from '../icons/done2.svg';
import cross from '../icons/cross.svg';
import hourglass from '../icons/hourglass.svg';
import { connect } from 'react-redux';
import Actions from '../actions/index';

const homeworkAction = Actions.homeworkAction;

const styles = {
  scrollDiv: {
    overflowY: 'scroll',
    background: '#B1BBCC',
    paddingRight: '5%',
    borderRadius: '5px',
    boxShadow: '2px 2px 4px #888',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '& *': {
      color: '#3d628f',
    }
  },
  dayContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2vh 0',
  },
  date:{
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 5%',
    textAlign: 'center'
  },
  dateNumb:{
    fontSize: '1.5vw',
    marginTop: '1.5vw',
    marginBottom: '1.5vw',
  },
  dateMonth:{
    fontSize: '0.8vw',
  },
  dayHomework:{
    flex: '1 0 75%',
  },
  homework:{
    display: 'grid',
    gridTemplateColumns: '6fr 1fr',
    background: '#93A1B6',
    padding: '1vh',
    borderRadius: '5px',
    margin: '2vh 0',
    boxShadow: '2px 2px 2px #888',
  },
  task:{
    fontSize: '1.5vw',
    margin: '0',
  },
  done:{
    boxShadow: '2px 2px 2px #888',
    borderRadius:'100%',
    margin:'auto',
    height:'2.5vw',
  },
  hourglass:{
    boxShadow: '2px 2px 2px #888',
    borderRadius:'100%',
    margin:'auto',
    height:'2.5vw',
    background:'#e67e22',
  },
};

class HomeworkTodo extends Component {
  handleDoneClick = (homeworkId, sessionId, homework) => () => this.props.onHomeworkClick(homeworkId, sessionId, homework);
  render() {
    const { classes, homework, sessionId } = this.props;
    const dates = homework.map(task => task.date).sort((a, b) => a > b);
    const uniqueDates = dates.filter((date, i) => dates.indexOf(date) === i);

    return (
      <div className={classes.scrollDiv}>
        {uniqueDates.map(date => (
          <div className={classes.dayContainer}>
            <div className={classes.date} >
              <h2
                className={classes.dateNumb}
              >
                {(new Date(date)).getDate()}
              </h2>
              <span className={classes.dateMonth}>
                {(new Date(date)).toLocaleString('uk-ua', { month: 'short' })}
              </span>
            </div>
            <div className={classes.dayHomework}>
              {homework.filter(x => x.date === date).map(task => (
                <div className={classes.homework}>
                  <h1 className={classes.task}>{task.desc}</h1>
                  {
                    task.done==='waiting'?<img className={classes.hourglass} src={hourglass} onClick={this.handleDoneClick(task.id, sessionId, homework)} />:
                    task.done?<img className={classes.done} src={done} onClick={this.handleDoneClick(task.id, sessionId, homework)}/>:
                    <img className={classes.done} src={cross} onClick={this.handleDoneClick(task.id, sessionId, homework)}/>
                  }
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

HomeworkTodo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    homework: state.homeWork,
    sessionId: state.sessionInfo.sessionId,
  }),
  dispatch => ({
    onHomeworkClick: (homeworkId, sessionId, homework) => {
      dispatch(homeworkAction(homeworkId, sessionId, homework));
    },
  })
)(injectSheet(styles)(HomeworkTodo));
