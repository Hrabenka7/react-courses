import React, { Component } from 'react';

class Course extends Component {
   state = {
       title: ''
   }

   componentDidMount () {
     this.parseQueryParams();
   }

   componentDidUpdate () {
    this.parseQueryParams();
   }

   parseQueryParams () {
    const query = new URLSearchParams(this.props.location.search);
    //console.log("This props", this.props)
    //console.log("Query", query);
    // create iterator (sth like array) we can loop through it
        for (let param of query.entries()){
            //console.log(param)
            if(this.state.title !== param[1]) {
                this.setState({title: param[1]});
            }
        }
   }

    render () {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>  {/*params.ID = must match the name in Route :id*/}
            </div>
        );
    }
}

export default Course;