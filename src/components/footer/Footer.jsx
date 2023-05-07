import React from 'react'
import css from './Footer.module.css'

const Footer = props => {
	const { tasks } = props
	const listCount = tasks.filter(task => task.status !== 'finished')
	const finishedCount = tasks.filter(task => task.status === 'finished')
	const name = 'Anna Turbina'
	const year = '2023'

	return (
		<footer>
			<div className={css.tasks}>
				<span>
					{listCount ?
						(`Active tasks: ${listCount.length}`) : null}
				</span>
				<span>
					{finishedCount ?
						(`Finished tasks: ${finishedCount.length}`) : null}
				</span>
			</div>
			<div className={css.tasks}>Kanban board by {name}, {year}</div>
		</footer>
	)
}

export default Footer