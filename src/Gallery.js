import React from 'react'

const Gallery = ({data}) => {
    return (
        <div className="row">
        {data.map((image) =><div key={image.id}>
        <div className="col-md-4">
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
           style={{margin:16}}  height="200" width="250" alt={image.title}/>
        <br/>
         {/* <p> {image.title}</p> */}
        </div>
       
        </div>)}
        </div>
    )
}

export default Gallery