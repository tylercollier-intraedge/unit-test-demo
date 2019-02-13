import React, { Component } from 'react';
import './App.css';
import * as api from './api'

class App extends Component {
  constructor() {
    super()
    this.state = {
      starred: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { starred } = this.state
    const newStarred = !starred
    api.toggleStar(newStarred)
    this.setState({
      starred: newStarred
    })
  }
  
  render() {
    const { starred } = this.state
    
    return (
      <div className="App">
        <div>
          <h1>Repo is starred: {starred ? 'true' : 'false'}</h1>
          <button onClick={this.handleClick}>Toggle star</button>
        </div>
      </div>
    );
  }
}

export default App;
