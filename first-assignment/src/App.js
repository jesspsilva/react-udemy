import './App.css';
import React, { Component } from 'react';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';


class App extends Component {
  state = {
    username: 'Jessica'
  }

  changeUsernameHandler = (e) => {
    this.setState({ 
      username: e.target.value
    });
  }

  render(){
    return (
      <div className="App">
        <UserInput onChange={this.changeUsernameHandler} name={this.state.username}/>
        <UserOutput name={this.state.username} />
        <UserOutput name={this.state.username} />
        <UserOutput name={this.state.username} />
      </div>
    );
  }
}

export default App;
