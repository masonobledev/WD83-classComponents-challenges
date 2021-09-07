import React, { Component } from 'react';

class DogIndex extends Component {
    constructor() {
        super();
        this.state = {
            photos: []
        };
    }
  
    componentDidMount() {
        const apiUrl = 'https://dog.ceo/api/breeds/image/random';
        fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw Error("Error fetching image");
            }
            else {
                return response.json()
            }
        .then(allData => {
            this.setState({ photos: allData });
        })
        .catch(err => {
            throw Error(err.message);
            });    
        }
      );
    }
    
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default DogIndex;