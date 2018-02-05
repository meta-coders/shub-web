import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  scrollDiv: {
    overflowY: 'scroll',
    background: '#B1BBCC',
    paddingRight: '5%',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px #888',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
};

const homework = [
  {
    'id': 1,
    'done': false,
    'date': '2018-03-01',
    'lesson_id': 10,
    'desc': 'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
  },
  {
    'id': 2,
    'done': true,
    'date': '2018-03-12',
    'lesson_id': 33,
    'desc': 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
  },
  {
    'id': 3,
    'done': true,
    'date': '2018-02-14',
    'lesson_id': 8,
    'desc': 'Nulla mollis molestie lorem. Quisque ut erat.',
  },
  {
    'id': 4,
    'done': false,
    'date': '2018-03-01',
    'lesson_id': 2,
    'desc': 'Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
  },
  {
    'id': 5,
    'done': true,
    'date': '2018-02-17',
    'lesson_id': 4,
    'desc': 'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
  },
  {
    'id': 6,
    'done': true,
    'date': '2018-02-10',
    'lesson_id': 31,
    'desc': 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
  },
  {
    'id': 7,
    'done': false,
    'date': '2018-03-10',
    'lesson_id': 12,
    'desc': 'Quisque ut erat.',
  },
  {
    'id': 8,
    'done': true,
    'date': '2018-02-14',
    'lesson_id': 31,
    'desc': 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
  },
];

class HomeworkTodo extends Component {
  render() {
    const dates = homework.map(task => task.date).sort((a, b) => a > b);
    const uniqueDates = dates.filter((date, i) => dates.indexOf(date) === i);

    return (
      <div className={this.props.classes.scrollDiv}>
        {uniqueDates.map(date => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '2vh 0',
            }}
          >
            <div style={{ flex: '1 0 5%', textAlign: 'center' }}>
              <h2
                style={{
                  fontSize: '1.5vw',
                  marginTop: '1.5vw',
                  marginBottom: '1.5vw',
                }}
              >
                {(new Date(date)).getDate()}
              </h2>
              <span style={{ fontSize: '0.8vw' }}>
                {(new Date(date)).toLocaleString('uk-ua', { month: 'short' })}
              </span>
            </div>
            <div style={{ flex: '1 0 75%' }}>
              {homework.filter(x => x.date === date).map(task => (
                <div
                  style={{
                    background: '#93A1B6',
                    padding: '1vh',
                    borderRadius: '5px',
                    margin: '2vh 0',
                    boxShadow: '0px 0px 10px #888',
                  }}
                >
                  <h1 style={{ fontSize: '1.5vw', margin: '0' }}>{task.desc}</h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default injectSheet(styles)(HomeworkTodo);
