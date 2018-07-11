import React from 'react'
import {Link} from 'react-router-dom'

// Stateless component
const HeroeBox = (props) => {
    return (
        <div>
            {/* <img src={props.thumbnail} height="42" width="42"/> */}
            <Link to={`/heroePage/`+props.id}>{props.name} </Link>
            {props.urls.map((url) => <a key={url.type} href={url.url} target="_blank">{url.type} </a>)}
        </div>
    )   
}

export default HeroeBox
