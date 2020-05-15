import React from 'react';

const PlaylistSingle = ({type, name, image}) => {
    return (
        <div className="col s3">
        <section className="card" >
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <h4>{name}</h4>
                <p>Type: {type}</p>
            </div>   
        </section></div>
    )
}

export default PlaylistSingle;