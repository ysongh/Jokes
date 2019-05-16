import React from 'react'

import { Joke } from './Joke'

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    }
  }

  handleClick() {
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept" : "application/json" 
      },
      method: "GET"
    }).then(response => response.json()).then(response => {
      let newJokes = this.state.jokes;
      newJokes.push({id: response.id, text: response.joke});
      this.setState({jokes: newJokes});
    });
  }
  
  removeJoke(targetId) {
    return this.setState({jokes: this.state.jokes.filter(joke => joke.id !== targetId)});
  }
  
  render() {
    return (
      <div>
        <div className="jokes__container">
            {this.state.jokes.map(joke => {
              return (
                <Joke key={joke.id} joke={joke} onClick={this.removeJoke.bind(this)}/>
              );
            })
            }
        </div>
        <button className="jokes__button" onClick={this.handleClick.bind(this)}>
          Add joke
        </button>
      </div>
    )
  }
}

export default Jokes
