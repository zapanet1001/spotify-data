import React, { Component } from 'react'
import SideBar from './SideBar/SideBar'
import Tracks from './Tracks/Tracks';
import Flex from './Flex';
import User from './User/User';

const App = () => {
  return (
    <div className="container-fluid" style={{"font-family": "'Lato', sans-serif"}}>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey darken-4">
            <a href="/" className="brand-logo center" >Tracks</a>
          </div>
        </nav>
      </div>
      <Flex container justifyContent="space-between">
          <SideBar />
          <Tracks />
      </Flex>
    </div>
  );

}

export default App;