import React, { useState, useEffect } from 'react';
import TrackSingle from './TrackSingle';
import Error from './Error';
import axios from 'axios';


const Tracks = props => {
    useEffect(() => {
      axios.get('/api/v1/saved-tracks')
        .then(res => 
            setState(
                res.data.items.map((track) => (
                    <TrackSingle key={track.track.id} item={track.track} />
                ))
            )
        )
    }, [])

    
    const [state, setState] = useState('')
    return(
        <div>
            <p>{state}</p>
        </div>
    )
};

export default Tracks;
