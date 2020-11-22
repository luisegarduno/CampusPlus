import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import { AssignmentDashboard } from './app/AssignmentDashboard';
import { Register } from './app/login/Register';
import { WelcomePage } from './app/WelcomePage';
import { Profile } from './app/Profile';
import { Home } from './app/Home';
import { Calendar } from './app/Calendar';
import { CoursesAndScheduleDash } from './app/CoursesAndSchedule';
import { AssignmentEditor } from './app/AssignmentEditor';

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
          <Route exact path="/schedules" component={CoursesAndScheduleDash} />
          <Route exact path="/welcomepages" component={WelcomePage} />
          <Route exact path="/assignmentchanges" component={AssignmentEditor} />
        </Switch>
      </Router>
    </div>
  )
}

export default App