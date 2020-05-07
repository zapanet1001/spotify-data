import React, { Component } from 'react'
import Tracks from './Tracks/Tracks';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="brand-logo center" >Tracks</a>
            </div>
          </nav>
        </div>
        <div className="row">
            <Tracks />
        </div>
        
      </div>
    );
  }
}

export default App;