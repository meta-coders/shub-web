import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import Navbar from './Navbar';
import TimetablePage from './TimetablePage';
import SchedulePage from './SchedulePage';
import StudentsPage from './StudentsPage';
const f = false;


const AdminRouter = ({ match }) => (
  <div>
    <Navbar />
    <Switch>
      <Route
        exact path={match.url + '/uploadTimetable'}
        component={TimetablePage}
      />
      <Route
        exact path={match.url + '/uploadSchedule'}
        component={SchedulePage}
      />
      <Route
        exact path={match.url + '/uploadStudents'}
        component={StudentsPage}
      />
      <Route path="/" component={() => <h1>Dashboard</h1>} />
    </Switch>
  </div>
);
const Admin = ({ match }) => (
  <div>
    {f ? (
      <Switch>
        <Route exact path={match.url + '/login'} component={LoginForm} />
        <Redirect from={match.url + '/'} to={match.url + '/login'} />
      </Switch>
    ) : (
      <Switch>
        <Redirect from={match.url + '/login'} to={match.url + '/'} />
        <Route path={match.url} component={AdminRouter} />
      </Switch>
    )}
  </div>
);

export default Admin;
