import React, { Component } from 'react';

import styles from './joke.module.css'

class Joke extends Component {
  /*removeJoke(e){
      this.props.onClick(this.props.joke.id);
    }*/
  render() {
    
    return (
      <div className="joke">
        <p className="joke__text">{this.props.joke.text}</p>
        <div onClick={() => this.props.onClick(this.props.joke.id)} className={styles.remove}>
          <div></div>
          <div></div>
        </div>
        <p className="joke__id">{this.props.joke.id}</p>
      </div>
    )
  }
}

export { Joke }
