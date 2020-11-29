import React from 'react';
//import { Link } from 'react-router-dom';
//import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";

export class Header extends React.Component{

    render() {
        return(<>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item nav-link">
                        <a href="/homepages" className="mb-0 h3 text-white">Campus</a>
                        <a href="/homepages" className="mb-0 h3 text-primary">Plus</a>
                    </li>
                </ul>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/homepages">Home</a>
                        </li>
                    </ul>
                </div>
                <a href="/welcomepages" className="btn btn-primary btn-sm rounded" role="button" aria-pressed="true">LOG OUT</a>
            </nav>
        </>)
    }
}
