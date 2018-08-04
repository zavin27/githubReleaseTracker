import React, {Component, Fragment} from 'react';


export default class ProfilePage extends Component {
  
  
  render() {
    
    let repo = (
      <div className="card card-body">
        <div className='row'>
          <div className='col-md-7'>
            <strong>RepoName</strong> : description
          </div>
          <div className="col-md-3">
            <span className="badge badge-success mx-auto">Forks: 0</span>
            <span className="badge badge-danger">Watchers: 0</span>
            <span className="badge badge-warning">Stars: 0</span>
          </div>
          <div className="col-md-2">
            <a href='#' className='btn btn-dark'>Repo Page</a>
          </div>
        </div>
      </div>
    );
    
    return (
      <Fragment>
        <div className="card">
          <div className='card-header'>
            <h4 className="card-title m-0">{this.props.displayName}</h4>
          </div>
          
          <div className="card-body">
            <div className="row">
              <div className='col-md-3'>
                <img className="card-img-top rounded img-thumbnail" src={this.props.photoURL} alt=''/>
                <a href="#" className="btn btn-info btn-block">View Profile</a>
              </div>
              <div className="col-md-9">
                <span className="badge badge-primary">Public repos: 0</span>
                <span className="badge badge-success">Public Gist: 0</span>
                <span className="badge badge-danger">Followers: 0</span>
                <span className="badge badge-info">Following: 0</span>
                
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>Company:</li>
                  <li className='list-group-item'>Website/Blog:</li>
                  <li className='list-group-item'>Location:</li>
                  <li className='list-group-item'>Member since:</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-header">
            <h3 className='page-header' style={{cursor: 'pointer'}} data-toggle="collapse"
                data-target="#collapseExample" aria-expanded="false"
                aria-controls="collapseExample">Latest Repositories </h3>
          </div>
          <div className='collapse' id="collapseExample">
            <div className="card card-body">
              {repo}
            </div>
          </div>
        </div>
      
      
      </Fragment>
    
    )
  }
}