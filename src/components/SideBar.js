import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';
import SideBarButton from './SideBarButton';
import { connect } from 'react-redux';


const buttons = [
  {
    pathname: '/',
    src: '../icons/shub.svg',
  },
  {
    pathname: '/',
    name: 'Розклад',
    src: '../icons/calendar.svg',
  },
  {
    pathname: '/homework',
    name: 'ДЗ',
    src: '../icons/notebook.svg',
  },
  {
    pathname: '/teachers',
    name: 'Вчителі',
    src: '../icons/team.svg',
  },
  {
    pathname: '/marks',
    name: 'Оцінки',
    src: '../icons/star.svg',
  },
  {
    pathname: '/stuff',
    name: 'Навчальни Материалы',
    src: '../icons/notepad.svg',
  },
];

const styles = {
  sideBar: {
    float: 'left',
    height: '100vh',
    width: '6vw',
    display: 'flex',
    flexDirection: 'column',
    background: '#3d628f',
    '& :hover': {
      background: '#50AF80',
      '& span': {
        color: 'white',
      },
    },
  },
};

class SideBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sideBar}>
        {buttons.map(
          ({ pathname, name, src }) => {
            if (localStorage.getItem('sessionId') !== 'false') {
              console.log('true');
              return (
                <SideBarButton
                  className={classes.sideBarButton}
                  key={name}
                  pathname={pathname}
                  name={name}
                  src={src}
                />
              );
            } else {
              console.log('false');
              return <Fragment />;
            }
          }
        )
        }
      </div>
    );
  }

}

export default connect(
  state => ({
    sessionId: state.sessionInfo.sessionId,
  }),
  () => ({})
)(injectSheet(styles)(SideBar));
