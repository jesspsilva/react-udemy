import './App.css';
import React, { Component } from 'react';
import Validation from './Validation/ValidationComponent';
import Char from './Char/CharComponent';

class App extends Component {

  state = {
    word: 'Hey, you can change this text!'
  }

  handleChange = (event) => {
      this.setState({
        word: event.target.value
      });
  }

  deleteCharHandler = (charIndex) => {
    const word = this.state.word.split('');
    word.splice(charIndex, 1);
    this.setState({word: word.join('')});
  }

  render() {
    const wordChars = this.state.word.split('').map((character, index) => {
      return <Char 
        key={index} 
        onClick={() => this.deleteCharHandler(index)} 
        char={character}/>
    });

    const charStyle = {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }

    const inputStyle = {
      border: '1px solid #f5b461',
      padding: '10px',
      textIndent: '5px',
      borderRadius: '5px',
      width: '50vw',
      boxSizing: 'border-box'
    }

    return (
      <div className="App">
        <input 
          style={inputStyle}
          type="text" 
          onChange={this.handleChange} 
          value={this.state.word}/>
          <Validation wordLength={this.state.word.length}/>
        <div style={charStyle}>
          {wordChars}
        </div>
        <p>This text has {this.state.word.length} characters (including spaces)</p>
      </div>
    );
  }
}

export default App;
