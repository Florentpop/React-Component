import React from 'react'

function Thumbnail(props){
    return(
        <div style={{ width: '24vw', height: '20vh', backgroundColor: 'pink' }}>
            <h3>{props.name}</h3>
        </div>
    )
}

export default Thumbnail;