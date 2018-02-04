import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Teachers from './components/Teachers.js';
import Homework from './components/Homework';
import Schedule from './components/Schedule';
import SideBar from './components/SideBar';
import Marks from './components/Marks.js';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <Header name='Ivan Gnatiuk' message='Контрольна робота'/>
        <Switch>
          <Route exact path="/homework" component={Homework} />
          <Route exact path="/marks" cpmponent={Marks} />
          <Route exact path="/teachers" component={Teachers} />
          <Route path="/" component={Schedule} />
        </Switch>

      </div>
    );
  }
}

export default App;
