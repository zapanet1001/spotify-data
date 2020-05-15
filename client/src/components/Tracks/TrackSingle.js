import React from 'react';

const TrackSingle = ({type, name, image, popularity}) => {
    return (
        <div className="col s3">
        <section className="card" >
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <h4>{name}</h4>
                <p>Type: {type}</p>
                <p>Popularity: {popularity}</p>
            </div>   
        </section></div>
    )
}

// const TrackSingle = ({item}) => (

    // <div className="col s4">
    //     <div className="card" id={item.id}>
    //         <div className="card-image">
    //             <img src={item.album.images[0].url} alt={item.name} />
    //         </div>
    //         <div className="card-content">
    //             <p>{item.name}</p>
    //         </div>
    //         <div className="card-action">
    //             <a href={item.preview_url} target="_blank">Song Preview</a>
    //         </div>
    //     </div>
    // </div>
// );

export default TrackSingle;