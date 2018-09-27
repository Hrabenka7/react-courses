import React, { Component } from 'react';

class Course extends Component {
   state = {
       courseTitle: ''
   }

   componentDidMount () {
       console.log("This props", this.props)
       const query = new URLSearchParams(this.props.location.search);
       console.log("Query", query);
       // create iterator (sth like array) we can loop through it
       for(let param of query.entries()){
           console.log(param)
           this.setState({courseTitle: param[1]})
       }
   }


    render () {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>  {/*params.ID = must match the name in Route :id*/}
            </div>
        );
    }
}

export default Course;