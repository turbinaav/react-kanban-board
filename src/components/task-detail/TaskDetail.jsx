import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import css from './TaskDetail.module.css'

const TaskDetail = props => {
	const match = useRouteMatch()
	const { taskId } = match.params
	const { tasks, setTasks } = props

	const task = tasks.find(task => task.id === taskId)

	const handleChange = (e) => {
		const taskDescription = tasks.map(task => {
			if (task.id === taskId) {
				return { ...task, description: e.target.value }
			}
			return task
		})
		setTasks(taskDescription)
	}

	return (
		<div className={css.taskDetailWrapper}>
			{task ? (
				<>
					<div className={css.taskDetailHeader}>
						<h2 className={css.title}>{task.title}</h2>
						<Link to='/' className={css.homeLink}>&#x2715; </Link>

					</div>
					<textarea className={css.taskDetailText} placeholder='This task has no description' value={task.description} onChange={handleChange}></textarea>
				</>
			) : (
				<h2>Task with ID {taskId} not found</h2>
			)}
		</div>
	)
}

export default TaskDetail