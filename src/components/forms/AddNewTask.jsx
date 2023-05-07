import React  from 'react'
import { useState } from 'react'
import css from './AddNewTask.module.css'

const AddNewTask = props => {
	const { addNewTask, setFormVisible } = props
	const [values, setValues] = useState({
		title: ''
	})

	const handleChange = (e) => {
		setValues({ ...values, title: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (values.title) {
			addNewTask(values.title)
		}
		setFormVisible(false)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input className={css.input} id='taskTitle' type='text' onChange={handleChange} value={values.title} />
			<button className={css.submit} type='submit' disabled={!values.title}>Submit</button>
		</form>
	)
}

export default AddNewTask