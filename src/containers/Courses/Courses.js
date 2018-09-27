import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Course from '../Course/Course'
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Nullam rhoncus aliquam metus. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Curabitur sagittis hendrerit ante. Nullam dapibus fermentum ipsum. Integer malesuada. Phasellus rhoncus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae' },
            { id: 2, title: 'React - The Complete Guide', description: 'Aenean fermentum risus id tortor. Integer tempor. Etiam bibendum elit eget erat. Integer malesuada. Vivamus porttitor turpis ac leo. Phasellus rhoncus. Donec iaculis gravida nulla. Aliquam ornare wisi eu metus. Duis pulvinar. Fusce consectetuer risus a nunc.' },
            { id: 3, title: 'Python - The Complete Guide', description: 'Phasellus faucibus molestie nisl. Nam sed tellus id magna elementum tincidunt. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Fusce aliquam vestibulum ipsum. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. '  }
        ]
    }

    render () {
        return (
            <div>
                <h2 style={{margin: '30px'}}>Amazing Udemy Courses</h2>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                /* { Link to= {this.props.match.url + '/' + course.id + '/' + course.title } */
                                <div style={{marginBottom: '60px'}}>
                                <Link
                                    key = {course.id} 
                                    to={{
                                        pathname: this.props.match.url + '/' + course.id,
                                        search: '?title=' + course.title
                                    }}>
                                    <article className="Course">
                                        <div>{course.title}</div>
                                    </article>
                                </Link>
                                </div>
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