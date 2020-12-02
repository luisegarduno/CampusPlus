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
import { CalendarWeekly } from './app/CalendarWeekly';
import { CalendarDaily } from './app/CalendarDaily';
import { ViewCourse } from './app/ViewCourse';
import { GuestHome } from './app/GuestHome';
import { CourseList } from './app/CourseList';
import { ForumDashboard } from './app/ForumDashboard';

const App = props => {
  return(
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/" component={WelcomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/assignments" component={AssignmentDashboard} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/courses" component={CourseDashboard}/>
          <Route exact path="/login" component={WelcomePage} />
          <Route exact path="/assignmentchanges" component={AssignmentEditor} />
          <Route exact path="/courseOptions" component={CourseSearch} />
          <Route exact path="/finished_assignments" component={ArchivedAssignments} />
          <Route exact path="/completedCourses" component={ArchivedCourses} />
          <Route exact path ="/weekly" component={CalendarWeekly} />
          <Route exact path="/daily" component={CalendarDaily} />
          <Route exact path="/viewCourses" component={ViewCourse} />
          <Route exact path ="/guest" component={GuestHome} />
          <Route exact path ="/courselist" component={CourseList} />
          <Route exact path ="/forum" component={ForumDashboard} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
