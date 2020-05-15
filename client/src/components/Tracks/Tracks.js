import React, { useState, useEffect } from 'react';
import TrackSingle from './TrackSingle';
import Flex from '../Flex';
// import Error from './Error';
import axios from 'axios';



const Tracks = () => {
    useEffect(() => {
        axios.get('/api/v1/saved-tracks')
        .then(res => 
            setTracks(res.data.items)
        )
    }, [])

    var [tracks, setTracks] = useState([]);


    console.log(tracks);
    return (
        <Flex className="row" container justifyContent="space-between" flexWrap="wrap">
            {tracks.map(
                (track) => 
                    <TrackSingle 
                        key= {track.track.id}
                        name={track.track.name}
                        image = {track.track.album.images[0].url} 
                        type={track.track.type} 
                        popularity={track.track.popularity} />
            )}
        </Flex>
       
    )

}

// const Tracks = props => {
//     useEffect(() => {
//       axios.get('/api/v1/saved-tracks')
//         .then(res => 
//             setState(
//                 res.data.items.map((track) => (
//                     <TrackSingle key={track.track.id} item={track.track} />
//                 ))
//             )
//         )
//     }, [])

    
//     const [state, setState] = useState('')
//     return(
//         <div>
//             <p>{state}</p>
//         </div>
//     )
// };

export default Tracks;
