import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';

class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <Header name='Ivan Gnatiuk' message='Контрольна робота'/>
      </div>
    );
  }
}

export default App;
