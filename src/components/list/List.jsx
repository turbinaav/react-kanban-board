import React  from 'react'
import { LIST_TYPES } from '../../config'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AddNewTask from '../forms/AddNewTask'
import Select from '../select/Select'
import css from './List.module.css'

const List = props => {
    const { title, type, tasks, addNewTask, allTasks, setTasks } = props
    const [isFormVisible, setFormVisible] = useState(false)

    const selectList = {
        [LIST_TYPES.BACKLOG]: [],
        [LIST_TYPES.READY]: allTasks.filter(element => {return element.status === 'backlog'}),
        [LIST_TYPES.IN_PROGRESS]: allTasks.filter(element => {return element.status === 'ready'}),
        [LIST_TYPES.FINISHED]: allTasks.filter(element => {return element.status === 'inProgress'})
    }

    const isSelectEmpty = (title !== 'Backlog') ? (Object.keys(selectList[type]).length ? false : true) : null

    const handleClick = () => {
        setFormVisible(!isFormVisible)
    }

    return (
        <div className={css.card}>
            <div className={css.cardTitle}>{title}</div>
            <ul className={css.ul}>
                {tasks.length ?
                    tasks.map(task => {
                        return (
                            <Link to={`/tasks/${task.id}`} className={css.taskLink}>
                                <li key={task.id} className={css.li} >{task.title}</li>
                            </Link>
                        )
                    }) :
                    <p>No tasks added yet</p>
                }
            </ul>
            {
                !isFormVisible &&
                (<button className={css.addButton} onClick={handleClick} disabled={isSelectEmpty}>+ Add card</button>)
            }
            {isFormVisible && (
                (type === LIST_TYPES.BACKLOG) ?
                    (<AddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} />)
                    :
                    (<Select selectList={selectList} allTasks={allTasks} setTasks={setTasks} setFormVisible={setFormVisible} /*setSelect={setSelect}*/ type={type} />)
            )}
        </div>
    )
}

export default List;