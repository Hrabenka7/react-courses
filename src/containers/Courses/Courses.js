import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Course from '../Course/Course'
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'React - The Complete Guide' },
            { id: 3, title: 'C# - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                /* { Link to= {this.props.match.url + '/' + course.id + '/' + course.title } */
                                <Link
                                    key = {course.id} 
                                    to={{
                                        pathname: this.props.match.url + '/' + course.id,
                                        search: '?title=' + course.title
                                    }}>
                                    <article className="Course">{course.title}</article>
                                </Link> 
                            );
                        })
                    }
                </section>
                <Route path = {this.props.match.url + '/:id'} component={Course}/>      {/* if passing /:title as a segment */}
            </div>
        );
    }
}

export default Courses;