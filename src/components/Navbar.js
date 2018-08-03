import React from 'react';
import {Link} from 'react-router-dom';


const navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">Github Release Tracker</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <Link className='nav-link dropdown-toggle' hidden={!props.displayName} to='/' id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              {props.displayName ? props.displayName  : ''}
              <img className='ml-1 rounded' src={props.photoURL} hidden={!props.displayName} alt='avatar' height='30' width='30'/>
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to='/profile'>View Profile</Link>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item" onClick={props.signout} >Logout</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default navbar;