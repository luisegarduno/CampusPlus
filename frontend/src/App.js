import React from 'react';
import './App.css';
import { CreateAccount } from './CreateAccount.jsx';
import { WelcomePage } from './WelcomePage.jsx';
import { HomePage } from './HomePage.jsx';
import { LoginPage } from './LoginPage.jsx';


export class App extends React.Component {
    state = {
        isLoggedIn: false,
        appView: 'welcomePage'
    }

    signIn(username) {
        this.setState({isLoggedIn: true});
        this.setState({appView: 'homePage'});
    }

    signOut() {
        this.setState({isLoggedIn: false});
        this.setState({appView: 'welcomePage'});
    }

    switchPage(pagename) {
        this.setState({appView: pagename});
    }

    getView() {
        if (!this.state.isLoggedIn) {
            if (this.state.appView === 'welcomePage') {
                return <WelcomePage switchPage={ pagename => this.switchPage(pagename) } />
            } else if (this.state.appView === 'loginPage') {
                return <LoginPage onLoginSuccess={ username => this.signIn(username) } />
            } else if (this.state.appView === 'createAccount') {
                return <CreateAccount />
            }
            return <WelcomePage />
        } else {
            if (this.state.appView === 'homePage') {
                return <HomePage />
            } else if (this.state.appView === 'profilePage') {
                return <HomePage />
            }
            return <HomePage />
        }

    }

  render() {
    return (
        <div className="App">
            <div className="App-header">
                <header>CampusPlus <button type="button" className="signout-button" onClick={() => this.signOut()}>Sign Out</button></header>
            </div>
            <div className="App-view">
                {this.getView()}
            </div>
        </div>
      );
  }
}

export default App;
