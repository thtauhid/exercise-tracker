import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Exercise = props => (
	<tr>
		<td>{props.exercise.username}</td>
		<td>{props.exercise.description}</td>
		<td>{props.exercise.duration}</td>
		<td>{props.exercise.date.substring(0, 10)}</td>
		<td>
			<Link className="btn btn-primary mr-2" to={"/edit/"+props.exercise._id} >EDIT</Link> <button className="btn btn-primary" onClick={() => { props.deleteExercise(props.exercise._id)} }>DEL</button>
		</td>
	</tr>

)

export default class ExerciseList extends Component {
	constructor(props) {
		super(props)

		this.deleteExercise = this.deleteExercise.bind(this)

		this.state = {
			exercises: []
		}
	}

componentDidMount() {
	axios.get('http://localhost:5000/exercise/')
	.then(response => {
		this.setState({exercises: response.data})
	})
	.catch(err => console.log('Error: ' + err))

}

deleteExercise(id) {
	axios.delete('http://localhost:5000/exercise/'+id)
		.then(res => console.log(res.data))

	this.setState({
		exercises: this.state.exercises.filter(el => el._id !== id)
	})
}

exerciseList() {
	return this.state.exercises.map(ce => {
		return <Exercise exercise={ce} deleteExercise={this.deleteExercise} key={ce._id} />
	})
}
	
	render() {
		return(
				<div>
					<h3>logged Exercises</h3>
					<table className="table">
						<thead className="thead-light">
							<tr>
								<td>Username</td>
								<td>Description</td>
								<td>Duration</td>
								<td>Date</td>
								<td>Actions</td>
							</tr>
						</thead>

						<tbody>
							{this.exerciseList()}
						</tbody>
					</table>
				</div>
			)
	}
}