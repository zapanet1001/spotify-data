import React from 'react';

import Flex from '../Flex';




const SideBar = ({togglePlaylists, toggleTracks}) => {
    return (
        <Flex container flexDirection="column" justifyContent="flex-start" flexWrap="wrap">
          <button onClick={toggleTracks}>Saved Tracks</button>
          <button onClick={togglePlaylists}>User Playlists</button>
        </Flex>
       
    )

}

export default SideBar;
