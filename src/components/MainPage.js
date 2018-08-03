import React, {Component} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default class MainPage extends Component {
  
  render(){
    return (
      <div>
        {this.props.isSignedIn ? null : <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={this.props.firebaseAuth}/>}
      </div>
    )
  }
}