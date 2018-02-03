import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Schedule from './components/Schedule';
import Homework from './components/Homework';

class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <Header name='Ivan Gnatiuk' message='Контрольна робота'/>
        <Switch>
          <Route path="/" component={Schedule} />
          <Route exact path="/homework" component={Homework} />
        </Switch>

      </div>
    );
  }
}

export default App;
