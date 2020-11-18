/*
import { Register } from './Register';
import { AssignmentDashboard } from './AssignmentDashboard';
import { AssignmentEditor } from './AssignmentEditor';
import { Calendar } from './Calendar';
import { Profile } from './Profile';
import Routes from '../models/Routes';
*/

import React from 'react';
import './app.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import AssignmentDashboard from '../app/AssignmentDashboard';
import { Register } from './Register';
import { WelcomePage } from './WelcomePage';

const App = props => {
  return(
    <div className="App">
      <Router>
        <Route exact path ="/" component={WelcomePage} />
        <Route exact path="/register" component={Register} />
      </Router>
    </div>
  )
}

export default App