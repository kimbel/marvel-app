import React from 'react'
import axios from 'axios'
import md5 from 'crypto-js/md5'

const currentTs = Date.now() / 1000
const apiPublic = '298bab46381a6daaaee19aa5c8cafea5'
const apiPrivate = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d'
const baseUrl = 'http://gateway.marvel.com:80'
const uriCharacters = '/v1/public/characters'
const hash = md5(''.concat(currentTs, apiPrivate, apiPublic))

class HeroePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            comics: []
        }
    }

    componentDidMount() {
        const requestUrl = `${baseUrl}${uriCharacters}/${this.props.match.params.id}?ts=${currentTs}&apikey=${apiPublic}&hash=${hash}`
        axios.get(requestUrl)
          .then(res => {
            const character = res.data
            console.log(character)
            this.setState({ 
                name: character.data.results[0].name,
                description: character.data.results[0].description,
                comics: character.data.results[0].comics.items
                 })
            console.log(this.state)
          })
      }

    render () {
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.description}</p>
                <ul>
                {this.state.comics.map(comic => <li key={comic.name}><a href={comic.resourceURI} target="_blank">{comic.name} </a></li>)}
                </ul>
                {/* {this.state.comics.items.map(item => <p>cuouc</p>)} */}
                <h1>Comics</h1>
                {/* <p>{this.state.heroeInfos.map(heroeInfo => <p>comic.available</p>)}</p> */}
                {/* {this.state.heroeInfos.comics.items.map(item => <p>item.name</p> )} */}
            </div>
        )
    }
}

export default HeroePage
