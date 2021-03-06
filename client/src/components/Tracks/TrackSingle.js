import React from 'react';

const TrackSingle = ({type, name, image, popularity}) => {
    return (
        <div className="col s3">
        <section className="card" >
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <h6>{name}</h6>
                <p>Type: {type}</p>
                <p>Popularity: {popularity}</p>
            </div>   
        </section></div>
    )
}

export default TrackSingle;