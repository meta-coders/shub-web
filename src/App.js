import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm.js';
import Teachers from './components/Teachers.js';
import Homework from './components/Homework';
import Schedule from './components/Schedule';
import SideBar from './components/SideBar';
import Marks from './components/Marks.js';
import Header from './components/Header';
import Admin from './Admin/components/Admin';

const Front = () => (
  <div>
    <SideBar />
    <Header name="Ivan Gnatiuk" message="Контрольна робота" />
    <Switch>
      <Route exact path="/homework" component={Homework} />
      <Route exact path="/marks" cpmponent={Marks} />
      <Route exact path="/teachers" component={Teachers} />
      <Route exact path="/login" component={LoginForm} />
      <Route path="/" component={Schedule} />
    </Switch>
  </div>
);

class App extends Component {
  render() {
    if (!localStorage.getItem('sessionId')) {
      localStorage.setItem('sessionId', false);
    }
    if (!localStorage.getItem('name')) {
      localStorage.setItem('name', '');
    }
    return (
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Front} />
      </Switch>
    );
  }
}

export default App;
