import React, {Component} from 'react';
import {BrowserRouter as Route, Router} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/Navbar'
import ExerciseList from './components/ExerciseList'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'

export default class App extends Component {
  render() {
    return(
        <Router>
          <Navbar />
          <br />
          <Route path="/" exact component={ExerciseList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create_exercise" component={CreateExercise} />
          <Route path="/create_user" component={CreateUser} />
        </Router>
      )
  }
}
