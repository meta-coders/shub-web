import React, { Component } from 'react';
import injectSheet from 'react-jss';
import SideBarButton from './SideBarButton'

const buttons = [
  {
    pathname: '/',
    src:'../icons/shub.svg',
  },
  {
    pathname: '/',
    name:'Розклад',
    src:'../icons/calendar.svg',
  },
  {
    pathname: '/homework',
    name:'ДЗ',
    src:'../icons/notebook.svg',
  },
  {
    pathname: '/teachers',
    name:'Вчителі',
    src:'../icons/team.svg',
  },
  {
    pathname: '/marks',
    name:'Оцінки',
    src:'../icons/star.svg',
  },
  {
    pathname: '/stuff',
    name:'Навчальни Материалы',
    src:'../icons/notepad.svg',
  },
]

const styles = {
  sideBar:{
    float: 'left',
    height: '100vh',
    width: '6vw',
    display: 'flex',
    flexDirection: 'column',
    background:'#3d628f',
  },
}

class SideBar extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.sideBar}>
        {buttons.map(
          ({pathname, name, src}) => <SideBarButton className={classes.sideBarButton} key={name} pathname={pathname} name={name} src={src}/>)
        }
      </div>
    );
  }

}

export default injectSheet(styles)(SideBar);
