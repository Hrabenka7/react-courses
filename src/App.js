import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Error from './components/pageNotFound';
import Home from './components/Home'
//import Course from './containers/Course/Course';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
          </div>
        </nav>

        {/* Routing */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path = "/users" component={Users}/>
          <Route path = "/courses" component={Courses}/>
          <Redirect from = "/all-courses" to="/courses"/>
          <Route component={Error}/>  {/*any other path  */}
        </Switch>
      </div>
      </BrowserRouter>


    );
  }
}

export default App;


