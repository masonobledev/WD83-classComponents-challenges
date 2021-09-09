import React, { Component } from 'react';

class DogIndex extends React.Component {
    constructor() {
        super()
        this.state = { 
            photos: []
        };
    }
  
    componentDidMount() {
        const apiUrl = 'https://dog.ceo/api/breeds/image/random';
        fetch(apiUrl)
        .then(response => response.json())
        .then(json => this.setState({ photos: json.data }));
    }
    
  render() {
    return (
        <div>
            <h1>my Component has Mounted, Check the browser 'console'</h1>
            {
                this.state.photos.length === 0
                ? 'Loading dog pics...'
                : this.state.photos.map(photos => (
                <figure key={photos.id}>
                <img src={photos.avatar} />
                <figcaption>
                {photos.name}
                </figcaption>
                </figure>
                ))
            }
        </div>

    );
  }
}
export default DogIndex;