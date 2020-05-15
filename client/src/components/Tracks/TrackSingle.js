import React from 'react';

const TrackSingle = ({type, name, popularity}) => {
    return (
        <section>
            <h4>{name}</h4>
            <p>Type: {type}</p>
            <p>Popularity: {popularity}</p>
        </section>
    )
}

// const TrackSingle = ({item}) => (
//     <div>
//         <p>{item.name}</p>
//     </div>
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