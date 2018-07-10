import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import md5 from 'crypto-js/md5'

const currentTs = Date.now() / 1000
const apiPublic = '298bab46381a6daaaee19aa5c8cafea5'
const apiPrivate = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d'
const baseUrl = 'http://gateway.marvel.com:80'
const uriCharacters = '/v1/public/characters'
const hash = md5(''.concat(currentTs, apiPrivate, apiPublic))
const requestUrl = `${baseUrl}${uriCharacters}?ts=${currentTs}&apikey=${apiPublic}&hash=${hash}`

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        axios.get(requestUrl)
          .then(res => {
            const characters = res.data;
            console.log(characters.data.results)
            this.setState({ characters: characters.data.results })
          })
      }

    render () {
        return (
            <div>
                <h1>Marvel Superheroes</h1>
                {this.state.characters.map(character => <HeroeBox key={character.id} name={character.name} urls={character.urls} thumbnail={character.thumbnail.path}/>)}
            </div>
          )
    }
}

class HeroeBox extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <div>
                {/* <img src={this.props.thumbnail} alt="Smiley face" height="42" width="42"/> */}
                <p>{this.props.name}</p>
                <p>{this.props.thumbnail}</p>
                {this.props.urls.map((url) => <a key={url.type} href={url.url} target="_blank">{url.type} </a>)}
            </div>
        )
    }
}

class HeroePage extends React.Component {
    render () {
        return (
            <div>

            </div>
        )
    }
}

ReactDom.render(<Container />, document.getElementById('app'))