import React from 'react';

import Flex from '../Flex';




const SideBar = ({toggleHidden}) => {
    return (
        <Flex container flexDirection="column" justifyContent="flex-start" flexWrap="wrap">
          <p>Hello</p>
          <button onClick={toggleHidden}>Saved Tracks</button>
          <button onClick={toggleHidden}>User Playlists</button>
        </Flex>
       
    )

}

export default SideBar;
