import React, {Component} from 'react'
import axios from 'axios'

export default class CreateUser extends Component {
	constructor(props) {
		super(props)

		this.onChangeUsername = this.onChangeUsername.bind(this)
		this.onSubmit = this.onSubmit.bind(this)

		this.state = {
			username: '',
		}
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value
		})
	}

	onSubmit(e) {
		e.preventDefault()

		const user = {
			username: this.state.username,
		}

		console.log(user)

		axios.post('http://localhost:5000/user/add', user)
			.then(res => console.log(res.data))
			// .catch()

		this.setState({
			username: ''
		})
	}


	render() {
		return(
				<div>
					<h3>Create New User</h3>
					<form onSubmit={this.onSubmit} >
						<label>Username:</label>
						<input type="text" 
						required 
						className="form-control" 
						value={this.state.username} 
						onChange={this.onChangeUsername}  />


						<input type='submit' value='Create Exercise Log' className='btn btn-primary' />
					</form>
				</div>
			)
	}
}