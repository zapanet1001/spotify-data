import React from 'react';

const TrackSingle = ({item}) => (
    <div className="col s4">
        <div className="card">
            {/* <div className="card-image">
                <img src={item.album.images[0]} alt={item.name} />
                <span className="card-title">{item.album.name}</span>
            </div> */}
            <div className="card-content">
                <p>{item.name}</p>
            </div>
            <div className="card-action">
                <a href={item.preview_url} target="_blank">Song Preview</a>
            </div>
        </div>
    </div>
);

export default TrackSingle;