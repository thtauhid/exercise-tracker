const mongoose = require('mongoose')

const Schema = mongoose.Schema

const excerciseSchema = new Schema({
		username: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		duration: {
			type: String,
			required: true
		},
		date: {
			type: String,
			required: true
		}
	}, {
		timestamps: true
})

const Excercise = mongoose.model('Excercise', excerciseSchema)

model.exports = Excercise