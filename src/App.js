import React, {Component} from 'react';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import firebase from 'firebase';
import ProfilePage from "./components/ProfilePage";
import {config} from "./firebase";


firebase.initializeApp(config);
class App extends Component {
  
  state = {
    isSignedIn: false,
    displayName: null,
    photoURL: null
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    // signInSuccessUrl: '/profile',
    
  };
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      this.setState({isSignedIn: !!user});
      this.setState({displayName: user.displayName, photoURL: user.photoURL});
      
    })
  }
  
  signOutHandler = () => {
    firebase.auth().signOut().then(response => {
      this.setState({isSignedIn: false, displayName: null})
    }).catch(error => {
    
    })
  };
  
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar
            signout={this.signOutHandler}
            displayName={this.state.displayName}
            photoURL={this.state.photoURL}
          />
          <div className="container">
            <Switch>
              <Route path='/' exact render={() => (<MainPage
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
                isSignedIn={this.state.isSignedIn}
              />)}/>
              <Route path='/profile' render={() => <ProfilePage/>}/>
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

