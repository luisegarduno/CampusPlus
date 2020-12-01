import React from 'react';
import { Header } from './Header';
import {Comment} from '../models/Comment';

export class ForumDashboard extends React.Component {

    render() {
        return <>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Course Review Forum</span>
            </nav>
            
            <div className="p-4 container-fluid container-md">
                <div className = "jumbotron-fluid bg-white text-center">
                    <h4 class="display-4 text-dark">Course Forums </h4>
                    <div className = "row">
                    </div>
                </div>
            </div>
        </>
    }
}
