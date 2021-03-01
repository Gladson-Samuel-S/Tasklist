import { FaCheckCircle } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick = {() => onToggle(task.id)}>
            <p className = 'task-title'>{task.text} 
            <FaCheckCircle 
                style= {{color: 'green' , cursor: 'pointer' }} 
                onClick = {() => onDelete(task.id)} />
            </p>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
