/*import React from 'react';
import './LoginPage.css';

export class LoginPage extends React.Component {
    state = {
        username: '',
        password: ''
    }

    signIn() {
        // no login credentials provided
        if (this.state.userName === '' || this.state.password === '' ) {
            return;
        }

        // invalid login credentials provided

        // successful login
        this.props.onLoginSuccess(this.state.username);
        
    }

    render() {
        return(
            <div className="box-login">
                <h5>User Login</h5>
                <form>
                    <div className="form-field">
                        <input type="text" id="username" name="username" placeholder="Username" onChange={ event => this.setState({username: event.target.value})} />
                    </div>
                    <div className="form-field">
                        <input type="text" id="password" name="password" placeholder="Password" onChange={ event => this.setState({password: event.target.value})} />
                    </div>
                </form>
                <button type="button" id="log-in-button" onClick={() => this.signIn()}>Sign In</button>
            </div>
        );
    }
}
*/