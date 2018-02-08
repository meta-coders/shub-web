import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/admin/" activeStyle={{ textDecoration: 'none' }}>
      Dashboard
    </Link>
    <Link to="uploadTimetable" activeStyle={{ textDecoration: 'none' }}>
      Upload timetable
    </Link>
    <Link
      to={{ pathname: '/admin/uploadSchedule' }}
      activeStyle={{ textDecoration: 'none' }}
    >
      Upload schedule
    </Link>
    <Link to="uploadStudents" activeStyle={{ textDecoration: 'none' }}>
      Upload students info
    </Link>
  </div>
);

export default Navbar;
