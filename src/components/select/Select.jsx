import React from 'react'
import css from './Select.module.css'

const Select = props => {

    const { allTasks, setTasks, type, setFormVisible, selectList } = props
    const list = selectList[type]

    const handleChange = (e) => {
        const taskId = e.target.value
        const updatedTasks = allTasks.map(task => {
            if (task.id === taskId) {
                return { ...task, status: type }
            } else {
                return task
            }
        })

        setTasks(updatedTasks)
        setFormVisible(false)
    }

    return (
        <select className={css.select} value='' name='' onChange={handleChange}>
            <option className={css.option && css.optionMob} disabled={true} value=''></option>
            {list.map(task => {
                return (<option className={css.option} key={task.id} value={task.id}>{task.title}</option>);
            })}
        </select>
    );
}

export default Select;