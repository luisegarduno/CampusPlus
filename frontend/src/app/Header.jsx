import React from 'react';
//import { Link } from 'react-router-dom';
//import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";

export class Header extends React.Component{

    render() {
        return(<>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
                <ul className="navbar-nav justify-content-start">
                    <li className="nav-item nav-link">
                        <a href="/homepages" className="mb-0 h4 text-white font-weight-bold">Campus</a>
                        <a href="/homepages" className="mb-0 h4 text-primary font-weight-bold">Plus</a>
                    </li>
                </ul>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/homepages">Home</a>
                        </li>
                        
                    </ul>  
                    <a href="/welcomepages" className="btn btn-primary btn-sm rounded justify-content-end" role="button" aria-pressed="true">LOG OUT</a>      
            </nav>
        </>)
    }
}
