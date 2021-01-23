import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        clicked: false
    }

    handleClick = (id, title) => {
        this.setState({ clicked: true });
        this.props.history.push({        
            pathname: this.props.match.url + '/' + id,
            search: '?title=' + title 
        });
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article className="Course-card" key={course.id} onClick={() => this.handleClick(course.id, course.title)}>{course.title}</article>;
                        } )
                    }
                </section>
                {this.state.clicked ? <Route path={this.props.match.url + '/:id'} component={Course}/> : null}
            </div>
        );
    }
}

export default Courses;