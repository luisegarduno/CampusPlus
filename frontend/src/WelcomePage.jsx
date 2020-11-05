import React from 'react';
import './WelcomePage.css';

export class WelcomePage extends React.Component {
    state = {
        userName: '',
        password: ''
    }

    switchPage(pagename) {
        this.props.switchPage(pagename);
    }

    render() {
        return(
            <div className="box-login">
                <h5>Welcome To CampusPlus</h5>

                <button type="button" id="new-account-button" onClick={() => this.switchPage('createAccount')}>Create Account</button>
                    
                <button type="button" id="log-in-button" onClick={() => this.switchPage('loginPage')}>Sign In</button>

            </div>
        );
    }
}