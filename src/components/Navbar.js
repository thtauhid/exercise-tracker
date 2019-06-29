import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
	render() {
		return(
				<nav className="navbar navbar-black bg-dark navbar-expand-lg">
					<Link to="/" className="navbar-brand" >ExerciseTracker</Link>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav mr-auto">
							<li className="navbar-item">
								<Link to="/" className="nav-link" >Exercises</Link>
							</li>
							<li className="navbar-item">
								<Link to="/create_exercise" className="nav-link" >Create Exercise Log</Link>
							</li>
							<li className="navbar-item">
								<Link to="/create_user" className="nav-link" >Create User</Link>
							</li>
						</ul>
					</div>
				</nav>
			)
	}
}