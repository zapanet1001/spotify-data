import React, { useState } from 'react'
import SideBar from './SideBar/SideBar'
import Tracks from './Tracks/Tracks';
import Playlists from './Playlists/Playlists';
import Flex from './Flex';
// import User from './User/User';



const App = () => {
  // var [isActive, setisActive] = useState(true);
  var [isHidden, setisHidden] = useState(false);

  const ToggleHidden = () => {
    setisHidden(!isHidden);
  }

  return (
    <div className="container-fluid" style={{"fontFamily": "'Lato', sans-serif"}}>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey darken-4">
            <a href="/" className="brand-logo center" >Tracks</a>
          </div>
        </nav>
      </div>
      {/* <button onClick={ToggleHidden}> Toggle Tracks</button> */}
      <Flex container justifyContent="space-between">
          <SideBar toggleHidden={ToggleHidden}/>
          {!isHidden && <Tracks />}
          {isHidden && <Playlists />}
          
      </Flex>
    </div>
  );

}

export default App;