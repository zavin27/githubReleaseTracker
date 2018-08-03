import React, {Component} from 'react';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar/>
          <div className="container">
            <MainPage/>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

