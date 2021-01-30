import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (e) => {
        this.setState({name: e.target.value})
    }

    ageChangedHandler = (e) => {
        this.setState({age: e.target.value})
    }

    render () {
        return (
            <div className="AddPerson">
                <input 
                type="text" 
                placeholder="Name" 
                onChange={e => this.nameChangedHandler(e)}
                value={this.state.name}/>
                <input 
                type="text" 
                placeholder="Age" 
                onChange={e => this.ageChangedHandler(e)}
                value={this.state.age}/>
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }
}

export default AddPerson;