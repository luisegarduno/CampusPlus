/*
import { AssignmentEditor } from './AssignmentEditor';
import Routes from '../models/Routes';
*/

import React from 'react';
import './app.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { AssignmentDashboard } from './AssignmentDashboard';
import { Register } from './Register';
import { WelcomePage } from './WelcomePage';
import { Profile } from './Profile';
import { Home } from './Home';
import { Calendar } from './Calendar';
import { CoursesAndScheduleDash } from './CoursesAndScheduleDash';
import {AssignmentEditor} from './AssignmentEditor';

const App = props => {
  return(
    <div className="App">
      <Router>
        <Route exact path ="/" component={WelcomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profiles" component={Profile} />
        <Route exact path="/homepages" component={Home} />
        <Route exact path="/assignments" component={AssignmentDashboard} />
        <Route exact path="/calendars" component={Calendar} />
        <Route exact path="/schedules" component={CoursesAndScheduleDash} />
        <Route exact path="/welcomepages" component={WelcomePage} />
        <Route exact path="/assignmentchanges" component={AssignmentEditor} />
      </Router>
    </div>
  )
}

export default App