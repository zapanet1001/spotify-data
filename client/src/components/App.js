import React, { useState } from 'react'
import SideBar from './SideBar/SideBar'
import Tracks from './Tracks/Tracks';
import Playlists from './Playlists/Playlists';
import Flex from './Flex';
// import User from './User/User';



const App = () => {
  var [playlistsHidden, setplaylistsHidden] = useState(true);
  var [tracksHidden, settracksHidden] = useState(false);
  var [tracksActive, settracksActive] = useState(true);
  var [playlistsActive, setplaylistsActive] = useState(false);

  const TogglePlaylists = () => {
    if(!playlistsActive) {
      setplaylistsHidden(!playlistsHidden);
      setplaylistsActive(!playlistsActive);

      settracksHidden(true);
      settracksActive(false);
    }
    
  }

  const ToggleTracks = () => {
    if(!tracksActive) {
      settracksHidden(!tracksHidden);
      settracksActive(!tracksActive);

      setplaylistsHidden(true);
      setplaylistsActive(false);
      
    }
    
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
          <SideBar togglePlaylists={TogglePlaylists} toggleTracks={ToggleTracks}/>
          {!tracksHidden && <Tracks />}
          {!playlistsHidden && <Playlists />}
          {/* {isHidden && <p>Hello</p>} */}
      </Flex>
    </div>
  );

}

export default App;