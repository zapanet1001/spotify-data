import React, { useState, useEffect } from 'react';
import PlaylistSingle from './PlaylistSingle';
import Flex from '../Flex';
// import Error from './Error';
import axios from 'axios';


const Playlists = () => {
    useEffect(() => {
        axios.get('/api/v1/user-playlists')
        .then(res => 
            setPlaylists(res.data)
        )
    }, [])

    var [playlists, setPlaylists] = useState([]);

    return (
        <Flex className="row" container justifyContent="space-between" flexWrap="wrap">
            {playlists.map(
                (playlist) => 
                    <PlaylistSingle 
                        key= {playlist.id}
                        name={playlist.name}
                        image = {playlist.images[0].url} 
                        type={playlist.type} />
            )}
        </Flex>
       
    )

}

export default Playlists;
