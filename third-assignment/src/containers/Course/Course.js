import React, { Component } from 'react';

import './Course.css';

class Course extends Component {
    state = {
        title: ''
    }

    componentDidMount() {
        this.queryParams();
    }

    componentDidUpdate() {
        this.queryParams();
    }

    queryParams() {
        const query = new URLSearchParams(this.props.location.search);
        for (let params of query.entries()){
            if(this.state.title != params[1]){
                this.setState({ title: params[1]});
            }
        }
    }

    render() {
        return(
            <div className="Course">
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Course;
