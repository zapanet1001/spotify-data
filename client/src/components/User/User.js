import React, { useState, useEffect } from 'react';
// import User from './User';
// import Error from './Error';
import axios from 'axios';

const UserSingle = ({item}) => (
    <div className="col s4">
        <div className="card" id={item.id}>
            <div className="card-image">
                <img src={item.images[0].url} alt={item.display_name} />
            </div>
            <div className="card-content">
                <p>{item.display_name}</p>
            </div>
            <div className="card-action">
                <a href={item.external_urls.spotify} target="_blank">Profile</a>
            </div>
        </div>
    </div>
);

const User = props => {
    useEffect(() => {
      axios.get('/api/v1/user-profile')
        .then(res => 
            setState(
                res.data.user.map((u) => (
                    <UserSingle key={u.id} item={u} />
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

export default User;
