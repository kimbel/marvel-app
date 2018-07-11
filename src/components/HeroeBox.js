import React from 'react'
import {Link} from 'react-router-dom'

// Stateless component
const HeroeBox = (props) => {
    return (
        <div className='heroeBox'>
            {/* <img src={props.thumbnail} height="42" width="42"/> */}
            <Link to={`/heroePage/`+props.id}>{props.name} </Link>
            <ul>
            {props.urls.map((url) => <li key={url.type} ><a href={url.url} target="_blank">{url.type} </a></li>)}
            </ul>
        </div>
    )   
}

export default HeroeBox
