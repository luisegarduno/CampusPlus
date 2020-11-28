import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import { AssignmentDashboard } from './app/AssignmentDashboard';
import { Register } from './app/login/Register';
import { WelcomePage } from './app/WelcomePage';
import { Profile } from './app/Profile';
import { Home } from './app/Home';
import { Calendar } from './app/Calendar';
import { CourseDashboard } from './app/CourseDashboard';
import { AssignmentEditor } from './app/AssignmentEditor';
import { CourseSearch } from './app/CourseSearch';
import { ArchivedAssignments } from './app/ArchivedAssignments';
import { ArchivedCourses } from './app/ArchivedCourses';

const App = props => {
  return(
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/" component={WelcomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profiles" component={Profile} />
          <Route exact path="/homepages" component={Home} />
          <Route exact path="/assignments" component={AssignmentDashboard} />
          <Route exact path="/calendars" component={Calendar} />
          <Route exact path="/courses" component={CourseDashboard}/>
          <Route exact path="/welcomepages" component={WelcomePage} />
          <Route exact path="/assignmentchanges" component={AssignmentEditor} />
          <Route exact path="/courseOptions" component={CourseSearch} />
          <Route exact path="/finishedAssignments" component={ArchivedAssignments} />
          <Route exact path="/completedCourses" component={ArchivedCourses} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
