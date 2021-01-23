import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import ErrorPage from './components/404Page/404Page';

import './App.css'

const App = () => {
  return (
    <div>
      <header>
        <nav className="NavBar">
          <ul>
            <li><NavLink to="/courses">Courses</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/courses" component={Courses}/>
        <Route path="/users" component={Users}/>
        <Redirect from="/" to="/courses"/>
        <Redirect from="/all-courses" to="/courses"/>
        <Route render={() =>  <ErrorPage/>}/>
      </Switch>
    </div>
  );
}

export default App;
