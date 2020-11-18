import { AssignmentEditor } from './app/AssignmentEditor';
import { AssignmentDashboard } from './app/AssignmentDashboard';

export const ROUTES = [

    { path: '/', component: Register },
    { path: '/create', component: AssignmentEditor },
    { path: '/edit/:assignmentID', component: AssignmentEditor },
]